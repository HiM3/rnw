import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CFormTextarea,
  CRow
} from '@coreui/react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const ForgotPassword = () => {

  const { register, handleSubmit } = useForm()

  const redirect = useNavigate()
  async function setupPassword(data) {
    await axios.post(`${import.meta.env.VITE_API_URL}/user/forgotPassword`, data)
      .then((res) => {
        alert(res.data.message)
        redirect('/login')
      })
      .catch((err)=>console.log(err))
  }
  return (
    <>
      <CRow>
        <CCol xs={10} className='mx-auto my-5'>
          <CCard className="mb-4">
            <CCardHeader className='bg-dark text-white'>
              <strong>Change Password</strong>
            </CCardHeader>
            <CCardBody>
              <CForm method='post' onSubmit={handleSubmit(setupPassword)} >
                <div className="mb-3">
                  <CFormLabel htmlFor="id1">Otp</CFormLabel>
                  <CFormInput
                    {...register('token')}
                    type="text"
                    id="id1"
                    placeholder="Enter otp"
                  />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="id2">New Password</CFormLabel>
                  <CFormInput
                    {...register('new_pass')}
                    type="password"
                    id="id2"
                    placeholder="Enter New Password"
                  />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="id2">Confirm Password</CFormLabel>
                  <CFormInput
                    {...register('confirm_pass')}
                    type="password"
                    id="id2"
                    placeholder="Enter Confirm Password"
                  />
                </div>
                <div className='mt4'>
                  <CButton type='submit' className='btn-primary'>submit</CButton>
                </div>
              </CForm>
            </CCardBody>
          </CCard>
        </CCol>

      </CRow>
    </>
  )
}

export default ForgotPassword
