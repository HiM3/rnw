import React from "react";
import { auth } from "../../firebase";
import { useForm } from "react-hook-form";
import { signInWithEmailAndPassword } from "firebase/auth";
import { NavLink, useNavigate } from "react-router-dom";
const Login = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  function login(data) {
    signInWithEmailAndPassword(auth,data.email,data.password)
      .then((result) => {
        localStorage.setItem('userId',result.user.uid)
        navigate('/HomePage');
      })
      .catch((err) => console.log(err));
  }
  return (
    <>
      <form action="" onSubmit={handleSubmit(login)} className="col-lg-6 mx-auto p-5 my-5 ">
        <input
          type="email"
          name="email"
          className="form-control mt-2"
          placeholder="Email"
          {...register("email", { required: true })}
        />
        <input
          type="password"
          name="password"
          className="form-control mt-2"
          placeholder="Password"
          {...register("password", { required: true })}
        />
        <button type="submit" className="btn btn-success mt-3">
          Login
        </button>
        <NavLink to="/Signup" className="btn btn-danger mt-3">Don't have an account? Signup</NavLink>
      </form>
    </>
  );
};

export default Login;
