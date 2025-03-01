import { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { FaEye, FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const API_URL = "https://67bd5858321b883e790c151e.mockapi.io/users";

const View = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState(""); // Search input
  const [sortValue, setSort] = useState(""); // Sorting

  // Fetch Data from API
  async function getUsers() {
    try {
      const res = await axios.get(API_URL);
      setUsers(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  // Handle Delete Function
  async function handleDelete(id) {
    if (window.confirm("Do you want to delete this user?")) {
      try {
        await axios.delete(`${API_URL}/${id}`);
        getUsers(); // Refresh Data
      } catch (error) {
        console.error("Error deleting user:", error);
      }
    }
  }

  // Filter & Sort Users
  const filteredUsers = users
    .filter((user) => {
      const name = user.name.toUpperCase();
      const searchInput = search.toUpperCase();
      return name.includes(searchInput);
    })
    .sort((a, b) => {
      if (sortValue === "asc") {
        return a.name.localeCompare(b.name);
      } else if (sortValue === "desc") {
        return b.name.localeCompare(a.name);
      } else {
        return users;
      }
    });

  return (
    <div className="container mt-4">
      <h2 className="text-center">User List</h2>

      {/* Search & Sorting Controls */}
      <div className="row mb-3">
        <div className="col-lg-6">
          <input
            type="search"
            placeholder="Search by Name"
            className="form-control"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="col-lg-6">
          <select
            className="form-select"
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="">-- Sort Users --</option>
            <option value="asc">A-Z</option>
            <option value="desc">Z-A</option>
          </select>
        </div>
      </div>
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
          {filteredUsers.map((user, index) => (
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
              <td>{user.City}</td>
              <td>
                <NavLink
                  to={`/singleUser/${user.id}`}
                  className="btn btn-primary btn-sm me-2"
                >
                  <FaEye />
                </NavLink>

                <NavLink
                  to={`/edit/${user.id}`}
                  className="btn btn-success btn-sm me-2"
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
