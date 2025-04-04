import { useEffect, useState } from "react";
import db from "./firebase";
import { get, ref, remove } from "firebase/database";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { NavLink } from "react-router";
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Viewuser = () => {
  const [users, setUser] = useState([]);
  async function showfirebase() {
    const res = await get(ref(db, "users"));
    const obj = res.val();
    var arr = [];
    for (var key in obj) {
      const id = key;
      const data = obj[key];
      const newobj = { id, ...data };
      arr.push(newobj);
    }
    setUser(arr);
  }
  useEffect(() => {
    showfirebase();
  }, []);
  async function trash(id) {
    const users = ref(db, `users/${id}`);
    await remove(users);
    alert("deleted successfully");
    showfirebase();
  }
  return (
    <>
      <table className="table container mt-4">
        <thead>
          <tr>
            <th scope="col">Sr No</th>
            <th scope="col">Username</th>
            <th scope="col">email</th>
            <th scope="col">mobile</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((users, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{users.username}</td>
              <td>{users.emailid}</td>
              <td>{users.mobile}</td>
              <td>
                <button onClick={() => trash(users.id)} className="btn btn-danger"><MdDelete /></button>
                <NavLink className="btn btn-warning" to={`/UpdateUser/${users.id}`}>
                  <FaPen />
                </NavLink>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Viewuser;
