import axios from "axios";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
  const { id } = useParams();
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const url = "http://localhost:3000/products";

  useEffect(() => {
    axios.get(`${url}/${id}`).then((res) => {
      const task = res.data;
      reset(task)
    });
  }, [id, reset]);

  const handleFormSubmit = async (data) => {
    try {
      await axios.put(`${url}/${id}`, data);
      alert("Task updated successfully!");
      navigate("/view");
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Update Task</h2>
      <form
        className="col-lg-6 mx-auto my-5 p-5 shadow bg-light"
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        <div className="mt-3">
          <input
            type="text"
            placeholder="Task Title"
            className="form-control"
            {...register("title", { required: true })}
          />
        </div>
        <div className="mt-3">
          <textarea
            placeholder="Task Description"
            className="form-control"
            {...register("description", { required: true })}
          />
        </div>
        <div className="mt-3">
          <select className="form-control" {...register("priority", { required: true })}>
            <option value="">Select Priority</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>
        <div className="mt-3">
          <select className="form-control" {...register("status", { required: true })}>
            <option value="">Select Status</option>
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
        <div className="mt-3">
          <input type="date" className="form-control" {...register("dueDate", { required: true })} />
        </div>
        <div className="mt-4">
          <button type="submit" className="btn btn-success form-control">Update Task</button>
        </div>
      </form>
    </div>
  );
};

export default Update;
