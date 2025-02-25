import axios from "axios";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
    const { id } = useParams();
  const { register, handleSubmit,setValue } = useForm();
  const navigate = useNavigate();
  const API_URL = "https://67bd5858321b883e790c151e.mockapi.io/users";

  useEffect(() => {
    axios.get(`${API_URL}/${id}`).then((res) => {
      const user = res.data;
      for (const key in user) {
        setValue(key, user[key]);
      }
    });
  }, [id, setValue]);
  const handleFormSubmit = async (data) => {
    try {
      await axios.put(`${API_URL}/${id}`, data);
      alert("User updated successfully!");
      navigate("/view");
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">API UpdateForm Navigator</h2>
      <form
        className="col-lg-6 mx-auto my-5 p-5 shadow bg-light"
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        <div className="mt-3">
          <input
            type="text"
            placeholder="Name"
            className="form-control"
            {...register("name", { required: true })}
          />
        </div>
        <div className="mt-3">
          <input
            type="date"
            placeholder="Enter birthday"
            className="form-control"
            {...register("birthday")}
          />
        </div>
        <div className="mt-3">
          <input
            type="url"
            placeholder="Enter Photo URL"
            className="form-control"
            {...register("image")}
          />
        </div>
        <div className="mt-3">
          <input
            type="email"
            placeholder="Enter email"
            className="form-control"
            {...register("email", { required: true })}
          />
        </div>
        <div className="mt-3">
          <input
            type="tel"
            placeholder="Enter mobile no."
            className="form-control"
            {...register("number")}
          />
        </div>
        <div className="mt-3">
          <select
            className="form-control"
            {...register("City", { required: true })}
          >
            <option value="">Select City</option>
            <option value="Ahmedabad">Ahmedabad</option>
            <option value="Bhavnagar">Bhavnagar</option>
            <option value="Gandhinagar">Gandhinagar</option>
            <option value="Surat">Surat</option>
          </select>
        </div>
        <div className="mt-3">
          <label>Gender:</label>
          <br />
          <input
            type="radio"
            value="Male"
            {...register("gender", { required: true })}
          />{" "}
          Male
          <input
            type="radio"
            value="Female"
            className="ms-3"
            {...register("gender", { required: true })}
          />{" "}
          Female
        </div>
        <div className="mt-3">
          <label>Hobbies:</label>
          <br />
          <input type="checkbox" value="Sports" {...register("Hobbies")} />{" "}
          Sports
          <input
            type="checkbox"
            value="Cooking"
            className="ms-3"
            {...register("Hobbies")}
          />{" "}
          Cooking
          <input
            type="checkbox"
            value="Singing"
            className="ms-3"
            {...register("Hobbies")}
          />{" "}
          Singing
          <input
            type="checkbox"
            value="Reading"
            className="ms-3"
            {...register("Hobbies")}
          />{" "}
          Reading
        </div>
        <div className="mt-4">
          <button type="submit" className="btn btn-success form-control">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Update;
