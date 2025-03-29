import React from "react";
import { auth } from "../../firebase";
import { useForm } from "react-hook-form";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { NavLink, useNavigate } from "react-router-dom";
const Signup = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  function Signup(data) {
    createUserWithEmailAndPassword(
      auth,
      data.email,
      data.password
    )
      .then(() => {
        navigate("/login");
      })
      .catch((err) => console.log(err));
  }
  return (
    <>
      <form action="" onSubmit={handleSubmit(Signup)} className="col-lg-6 mx-auto p-5 my-5 ">
        <input
          type="email"
          name="email"
          class="form-control mt-2"
          placeholder="Email"
          {...register("email", { required: true })}
        />
        <input
          type="password"
          name="password"
          class="form-control mt-2"
          placeholder="Password"
          {...register("password", { required: true })}
        />
        <button type="submit" class="btn btn-success mt-3">
          Signup
        </button>
        <NavLink to="/login" class="btn btn-danger mt-3">Already have an account? Login</NavLink>
      </form>
    </>
  );
};

export default Signup;
