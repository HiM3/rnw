import { Link, useNavigate } from 'react-router-dom'
import {
    CButton,
    CCard,
    CCardBody,
    CCardGroup,
    CCol,
    CContainer,
    CForm,
    CFormInput,
    CInputGroup,
    CInputGroupText,
    CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import { useForm } from 'react-hook-form'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
const SendOtp = () => {
    const { register, handleSubmit, reset } = useForm()

    const redirect = useNavigate()
    async function forgot(data) {
        await axios.post(`${import.meta.env.VITE_API_URL}/user/sendOtp`, data)
            .then((res) => {
                alert(res.data.message)
                redirect('/forget-password')
            })
            .catch((err) => console.log(err))
    }
    return (
        <>
            <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
                <CContainer>
                    <CRow className="justify-content-center">
                        <CCol md={8}>
                            <CCardGroup>
                                <CCard className="p-4">
                                    <CCardBody>
                                        <CForm method='post' onSubmit={handleSubmit(forgot)}>
                                            <h1>Forgot Password</h1>
                                            <CInputGroup className="mb-3">
                                                <CInputGroupText>
                                                    <CIcon icon={cilUser} />
                                                </CInputGroupText>
                                                <CFormInput {...register('email')} placeholder="email" autoComplete="username" />
                                            </CInputGroup>
                                            <CRow>
                                                <CCol xs={6}>
                                                    <CButton type='submit' color="primary" className="px-4">
                                                        Send Otp
                                                    </CButton>
                                                </CCol>
                                            </CRow>
                                        </CForm>
                                    </CCardBody>
                                </CCard>
                            </CCardGroup>
                        </CCol>
                    </CRow>
                </CContainer>
            </div>
        </>
    )
}

export default SendOtp
