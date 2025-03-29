import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { auth } from "../../firebase";

const Private = () => {
  const [user, setUser] = useState({});
  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      setUser(user)
    })
  },[])
  return user === null ? <Navigate to="/login" /> : <Outlet />;
};

export default Private;
