import { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const API_URL = "https://67bd5858321b883e790c151e.mockapi.io/users";

const View = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(API_URL).then((res) => setUsers(res.data));
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure?")) {
      await axios.delete(`${API_URL}/${id}`);
      setUsers(users.filter((user) => user.id !== id));
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center">User List</h2>
      <table className="table table-striped table-hover">
        <thead className="table-success">
          <tr>
            <th>Sr No.</th>
            <th>Name</th>
            <th>DOB</th>
            <th>Gender</th>
            <th>Mobile No.</th>
            <th>Photo</th>
            <th>City</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.birthday}</td>
              <td>{user.gender}</td>
              <td>{user.number}</td>
              <td>
                <img
                  src={user.image}
                  alt="User"
                  width="40"
                  height="40"
                  className="rounded-circle"
                />
              </td>
              <td>{user.City}</td>{" "}
              <td>
                <NavLink
                  to={`/edit/${user.id}`}
                  className="btn btn-warning btn-sm me-2"
                >
                  <FaPen />
                </NavLink>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(user.id)}
                >
                  <MdDelete />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default View;
