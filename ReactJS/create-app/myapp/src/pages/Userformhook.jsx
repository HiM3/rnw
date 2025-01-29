import React from "react";
import { useForm } from "react-hook-form";

const Userformhook = () => {
  const { register, handleSubmit, reset } = useForm();
  const signup = (data) => {
    console.log(data);
    alert("signup successfully");
    reset();
  };

  return (
    <>
      <form
        action=""
        method="post"
        onSubmit={handleSubmit(signup)}
        className="col-lg-6 shadow mx-auto my-5 p-5"
      >
        <div className="mt-4">
          <input
            type="text"
            className="form-control"
            placeholder="username"
            {...register("username")}
            id="username"
          />
        </div>
        <div className="mt-4">
          <input
            type="email"
            className="form-control"
            placeholder="email"
            {...register("email")}
            id="email"
          />
        </div>
        <div className="mt-4">
          <input
            type="number"
            className="form-control"
            placeholder="mobile number"
            {...register("number")}
            id="number"
          />
        </div>
        <div className="mt-4">
          <select
            {...register("city")}
            id="city"
            className="form-dropdown form-control"
          >
            <option value="Select">Select City</option>
            <option value="Ahmedabad">Ahmedabad</option>
            <option value="Surat">Surat</option>
            <option value="Vadodara">Vadodara</option>
            <option value="Gandhinagar">Gandhinagar</option>
          </select>
        </div>
        <div className="mt-4">
            <label htmlFor="">Gender</label><br />
            <input type="radio" {...register("gender")} value="male" id="" />
            <label htmlFor="">Male</label><br />
            <input type="radio" {...register("gender")} value="female" id="" />
            <label htmlFor="">Female</label>
        </div>
        <div className="mt-4">
            <label htmlFor="">Hobbies</label><br />
            <input type="checkbox" {...register('Hobbies')} value="Play" id="" /> <label htmlFor="">Play</label><br />
            <input type="checkbox" {...register('Hobbies')} value="Sports" id="" /> <label htmlFor="">Sports</label><br />
            <input type="checkbox" {...register('Hobbies')} value="Reading" id="" /> <label htmlFor="">Reading</label><br />
            <input type="checkbox" {...register('Hobbies')} value="Cooking" id="" /> <label htmlFor="">Cooking</label><br />
        </div>
        <div className="mt-4">
          <button type="submit" className="form-control btn btn-success">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default Userformhook;
