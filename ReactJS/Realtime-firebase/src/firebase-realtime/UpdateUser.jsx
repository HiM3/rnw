import { set, get, ref } from "firebase/database";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import db from "./firebase";

const Update = () => {
  const { id } = useParams();
  const { register, handleSubmit, reset } = useForm();
  const redirect = useNavigate();
  async function single() {
    const res = await get(ref(db, `users/${id}`));
    console.log(res.val());
    reset(res.val());
  }

  useEffect(() => {
    single();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function submitData(data) {
    await set(ref(db, `users/${id}`), data);
    alert("data updated successfully");
    redirect("/view");
  }
  return (
    <div className="col-lg-6 mx-auto my-5 p-5 shadow">
      <form action="" method="post" onSubmit={handleSubmit(submitData)}>
        <div className="mt-4">
          <input
            type="text"
            {...register("username")}
            placeholder="enter username"
            className="form-control"
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
            {...register("mobile")}
            placeholder="enter mobile"
            className="form-control"
          />
        </div>
        <button className="btn btn-warning mt-4">update</button>
      </form>
    </div>
  );
};

export default Update;
