import { useForm } from "react-hook-form";

const Userformhook = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const signup = (data) => {
    console.log(data);
    alert("signup successfully");
    reset();
  };
  const formValues = watch();

  return (
    <>
      <h1>React form Hook</h1>
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
            {...register("username", {
              required: {
                value: true,
                message: "Please Enter Username",
              },
              minLength: {
                value: 3,
                message: "Username must be at least 3 characters long",
              },
              maxLength: {
                value: 20,
                message: "Max 20 characters allowed",
              },
              pattern: {
                value: /^[A-Za-z]+$/,
                message: "Only alphabetic characters are allowed",
              },
            })}
            id="username"
          />
          <span className="text-danger">{errors.username?.message}</span>
        </div>
        <div className="mt-4">
          <input
            type="email"
            className="form-control"
            placeholder="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: " Enter the valid email",
              },
            })}
            id="email"
          />{" "}
          <span className="text-danger">{errors.email?.message}</span>
        </div>
        <div className="mt-4">
          <input
            type="number"
            className="form-control"
            placeholder="mobile number"
            {...register("number", {
              required: "Mobile number is required",
              pattern: {
                value: /^[6789][0-9]{9}$/,
                message:
                  "Mobile number must start with 6, 7, 8, or 9 and be 10 digits",
              },
            })}
            id="number"
          />
          <span className="text-danger">{errors.number?.message}</span>
        </div>
        <div className="mt-4">
          <select
            {...register("city", { required: "Please select a city" })}
            id="city"
            className="form-dropdown form-control"
          >
            <option value="">Select City</option>
            <option value="Ahmedabad">Ahmedabad</option>
            <option value="Surat">Surat</option>
            <option value="Vadodara">Vadodara</option>
            <option value="Gandhinagar">Gandhinagar</option>
          </select>
          <span className="text-danger">{errors.city?.message}</span>
        </div>
        <div className="mt-4">
          <label htmlFor="">Gender</label>
          <br />
          <input
            type="radio"
            {...register("gender", { required: "Please select a gender" })}
            value="male"
            id=""
          />
          <label htmlFor="">Male</label>
          <br />
          <input type="radio" {...register("gender")} value="female" id="" />
          <label htmlFor="">Female</label> <br />
          <span className="text-danger">{errors.gender?.message}</span>
        </div>
        <div className="mt-4">
          <label htmlFor="">Hobbies</label>
          <br />
          <br />
          {["Play", "Sports", "Reading", "Cooking"].map((hobby) => (
            <div key={hobby}>
              <input
                type="checkbox"
                {...register("hobbies", {
                  required: "Please select at least one hobby",
                })}
                value={hobby}
              />
              <label> {hobby}</label>
            </div>
          ))}
          <span className="text-danger">{errors.hobbies?.message}</span>
        </div>
        <div className="mt-4">
          <textarea
          className="form-control"
          placeholder="Address"
            name="address"
            {...register("address", {
              required: "Please write your address",
            })}
            id=""
          ></textarea>
          <span className="text-danger">{errors.address?.message}</span>
        </div>
        <div className="mt-4">
          <button type="submit" className="form-control btn btn-success">
            Submit
          </button>
        </div>
        {formValues.username && <span>Username: {formValues.username}</span>}{" "}
        <br />
        {formValues.email && <span>Email: {formValues.email}</span>} <br />
        {formValues.number && <span>Number: {formValues.number}</span>} <br />
        {formValues.city && <span>City: {formValues.city}</span>} <br />
        {formValues.gender && <span>Gender: {formValues.gender}</span>} <br />
        {formValues.hobbies && (
          <span>Hobbies: {formValues.hobbies.join(",")}</span>
        )}
      </form>
    </>
  );
};

export default Userformhook;
