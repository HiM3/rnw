import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const url = "http://localhost:3000/products";
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  const submitTask = async (data) => {
    // onSubmit(data);
    try{
      await axios.post(url,data)
      alert("Task added Successfully");
      navigate("/view")
      reset();
    }
    catch(err){
      console.log("Error adding data:", err);
    }
  };

  return (
    <form className="col-lg-6 mx-auto my-5 p-4 shadow" onSubmit={handleSubmit(submitTask)}>
      <h3 className="text-center">Add New Task</h3>

      <div className="mt-3">
        <label>Task Title</label>
        <input
          type="text"
          placeholder="Enter task title"
          className="form-control"
          {...register("title", { required: true })}
        />
      </div>

      <div className="mt-3">
        <label>Description</label>
        <textarea
          placeholder="Enter task description"
          className="form-control"
          {...register("description")}
        />
      </div>

      <div className="mt-3">
        <label>Priority</label>
        <select className="form-control" {...register("priority", { required: true })}>
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
      <div className="mt-4 text-center">
        <button type="submit" className="btn btn-success">Add Task</button>
      </div>
    </form>
  );
};

export default Create;
