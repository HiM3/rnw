import db from "./firebase";
import { push, ref, set } from "firebase/database";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

const Adduser = () => {
    const navigate = useNavigate()
  const { handleSubmit, register } = useForm();
  function insertData(data) {
    set(push(ref(db, "users")), data);
    alert("data Inserted successfully");
    navigate("/View")
  }

  return (
    <>
      <div className="col-6 mx-auto shadow my-5 p-5">
        <form action="" method="post" onSubmit={handleSubmit(insertData)}>
          <h2 className="text-center">Add Data</h2>
          <div className="mt-4">
            <input
              type="text"
              className="form-control"
              {...register("username")}
              placeholder="Enter username"
            />
          </div>
          <div className="mt-4">
            <input
              type="text"
              className="form-control"
              {...register("emailid")}
              placeholder="Enter email ID"
            />
          </div>
          <div className="mt-4">
            <input
              type="text"
              className="form-control"
              {...register("mobile")}
              placeholder="Enter mobile"
            />
          </div>
          <div className="mt-4">
            <button type="submit" className="btn btn-success">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Adduser;
