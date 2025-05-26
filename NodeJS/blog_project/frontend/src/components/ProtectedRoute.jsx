import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const [user, setUser] = useState({});
  async function isAuth() {
    await axios.get(`${import.meta.env.VITE_API_URL}/blog/isAuth`, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data.data);
        setUser(res.data.user);
      })
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    isAuth();
  }, []);
  return user ? <Outlet />:<Navigate to="/login" />;
};

export default ProtectedRoute;
