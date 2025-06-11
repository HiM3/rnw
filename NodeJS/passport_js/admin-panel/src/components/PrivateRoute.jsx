import { useEffect, useState } from "react"
import axios from 'axios'
import { Navigate, Outlet } from "react-router-dom"
const PrivateRoute = () => {
    const [user, setUser] = useState({})

    async function isAuth() {
        try {
            const res = await axios.get(`${import.meta.env.VITE_API_URL}/user/isAuth`, {
                withCredentials: true,
            });
            setUser(res.data.user);
        } catch (err) {
            setUser(null); 
        }
    }
    useEffect(() => {
        isAuth()
    }, [])
    return user ? <Outlet /> : <Navigate to="/login" />
}

export default PrivateRoute
