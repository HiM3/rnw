import axios from "axios";
import { useEffect, useState } from "react";
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { NavLink } from "react-router-dom";

const View = () => {
  const url = "http://localhost:3000/products";
  const [tasks, settasks] = useState([]);

  useEffect(() => {
    axios.get(url).then((res) => settasks(res.data));
  }, []);
  const onDelete = async (id) => {
    if (window.confirm("Do you want to delete this task")) {
      await axios.delete(`${url}/${id}`);
      settasks(tasks.filter((task) => task.id !== id));
    }
  };
  return (
    <div className="container my-5">
      <h2 className="text-center">Task List</h2>
      {
        <table className="table table-hover table-striped">
          <thead>
            <tr>
              <th>Sr No.</th>
              <th>Title</th>
              <th>Description</th>
              <th>Priority</th>
              <th>Status</th>
            <th>Due Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks &&
              tasks.map((task, index) => (
                <tr key={task.id}>
                  <td>{index + 1}</td>
                  <td>{task.title}</td>
                  <td>{task.description}</td>
                  <td>
                    <span className={`badge ${task.priority === "High"? "bg-danger"  : task.priority === "Medium"  ? "bg-warning"  : "bg-success"}`}>
                      {task.priority}
                    </span>
                  </td>
                  <td>{task.status}</td>
                <td>{task.dueDate}</td>
                  <td>
                    <NavLink
                      className="btn btn-warning me-2"
                      to={`/update/${task.id}`}
                    >
                      <FaPen />
                    </NavLink>
                    <button
                      className="btn btn-danger"
                      onClick={() => onDelete(task.id)}
                    >
                      <MdDelete />
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      }
    </div>
  );
};

export default View;
