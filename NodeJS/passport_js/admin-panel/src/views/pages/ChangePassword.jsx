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
const ChangePassword = () => {

  const { register, handleSubmit } = useForm()

  async function setupPassword(data) {
    await axios.post(`${import.meta.env.VITE_API_URL}/user/changePassword`, data, {withCredentials:true})
      .then((res) => {
        alert(res.data.message)
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
                  <CFormLabel htmlFor="id1">Old Password</CFormLabel>
                  <CFormInput
                    {...register('old_password')}
                    type="password"
                    id="id1"
                    placeholder="Enter Old Password"
                  />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="id2">New Password</CFormLabel>
                  <CFormInput
                    {...register('new_password')}
                    type="password"
                    id="id2"
                    placeholder="Enter New Password"
                  />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="id2">Confirm Password</CFormLabel>
                  <CFormInput
                    {...register('confirm_password')}
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

export default ChangePassword
