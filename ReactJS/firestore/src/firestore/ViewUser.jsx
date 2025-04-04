import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import db from "./firestore";
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
const ViewUser = () => {
  const [users, setUsers] = useState([]);

  async function showFirestore() {
    const querySnapshot = await getDocs(collection(db, "students"));
    const arr = [];
    querySnapshot.forEach((doc) => {
      const id = doc.id;
      const data = doc.data();
      const newData = { id, ...data };
      arr.push(newData);
    });
    setUsers(arr);
  }

  useEffect(() => {
    showFirestore();
  }, []);

  async function trash(id) {
    if (confirm("do you want to delete your data?")) {
      await deleteDoc(doc(db, "students", id));
      alert("your data has been deleted!");
      showFirestore();
    }
  }
  return (
    <>
      <div className="container my-5">
        <div className="table-responsive">
          <table className="table table-bordered table-striped table-hover w-100">
            <thead className="table-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Student ID</th>
                <th scope="col">Student Name</th>
                <th scope="col">Student Email</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody className="table-success">
              {users.map((users, index) => (
                <tr key={users.id}>
                  <td>{index + 1}</td>
                  <td>{users.student_id}</td>
                  <td>{users.student_name}</td>
                  <td>{users.student_email}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => trash(users.id)}
                    >
                      <MdDelete />
                    </button>
                    <NavLink
                      to={`/update/${users.id}`}
                      className="btn btn-warning mx-auto"
                    >
                      <FaPen />
                    </NavLink>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ViewUser;
