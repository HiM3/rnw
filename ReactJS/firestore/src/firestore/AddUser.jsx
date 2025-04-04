import { addDoc, collection } from "firebase/firestore";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import db from "./firestore";

const AddUser = () => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  async function adddata(data) {
    try {
      await addDoc(collection(db, "students"), data);
      alert("Data has been inserted!");
      navigate("/view");
      // console.log(data)
      reset();
    } catch (error) {
      console.error("Error inserting data:", error);
      alert("Failed to insert data.");
    }
  }

  return (
    <>
      <div className="col-6 mx-auto shadow my-5 p-5">
        <form onSubmit={handleSubmit(adddata)}>
          <div className="mb-3">
            <label className="form-label">Student Name</label>
            <input
              type="text"
              className="form-control"
              {...register("student_name", {
                required: "Student name is required!",
              })}
            />
            <p className="text-danger">{errors?.student_name?.message}</p>
          </div>
          <div className="mb-3">
            <label className="form-label">Student Email</label>
            <input
              type="email"
              className="form-control"
              {...register("student_email", {
                required: "Student email is required!",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Please enter a valid email address!",
                },
              })}
            />
            <p className="text-danger">{errors?.student_email?.message}</p>
          </div>
          <div className="mb-3">
            <label className="form-label">Student ID</label>
            <input
              type="number"
              className="form-control"
              {...register("student_id", {
                required: "Student ID is required!",
                min: {
                  value: 1,
                  message: "Student ID must be a positive number!",
                },
              })}
            />
            <p className="text-danger">{errors?.student_id?.message}</p>
          </div>
          <button type="submit" className="btn btn-primary mt-3">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default AddUser;
