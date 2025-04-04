import { doc, getDoc, setDoc } from "firebase/firestore";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router";
import db from "./firestore";
import { useEffect } from "react";

const UpdateUser = () => {
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm();
  const { id } = useParams();
  const navigate = useNavigate();

  async function singledata() {
    const res = await getDoc(doc(db, `students/${id}`));
    reset(res.data());
  }

  useEffect(() => {
    singledata();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  async function updatedata(data) {
    await setDoc(doc(db, `students/${id}`), data);
    alert("Data has been updated");
    navigate("/view");
  }

  return (
    <>
      <div className="col-6 mx-auto shadow my-5 p-5">
        <form onSubmit={handleSubmit(updatedata)}>
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
          <button type="submit" className="btn btn-warning mt-3">
            Update
          </button>
        </form>
      </div>
    </>
  );
};

export default UpdateUser;
