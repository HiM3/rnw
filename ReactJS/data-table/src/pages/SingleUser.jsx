import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const SingleUser = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();

  const API_URL = "https://67bd5858321b883e790c151e.mockapi.io/users";

  async function getUser() {
    try {
      const res = await axios.get(`${API_URL}/${id}`);
      setUser(res.data);
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <div className="container my-5">
        <div className="card shadow-lg bg-dark text-white">
          <div className="row g-0">
            <div className="col-md-4 text-center">
              <img
                src={user.image}
                alt="User"
                className="img-fluid rounded-start w-100 img-thumbnail"
              />
            </div>

            <div className="col-md-8">
              <div className="card-body">
                <h3 className="card-title">{user.name}</h3>
                <ul className="list-group list-group-flush bg-dark text-white">
                  <li className="list-group-item bg-dark text-white">
                    <strong>DOB:</strong> {user.birthday}
                  </li>
                  <li className="list-group-item bg-dark text-white">
                    <strong>Gender:</strong> {user.gender}
                  </li>
                  <li className="list-group-item bg-dark text-white">
                    <strong>Mobile:</strong> {user.number}
                  </li>
                  <li className="list-group-item bg-dark text-white">
                    <strong>City:</strong> {user.City}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center">
        <button onClick={() => navigate(-1)} className="btn btn-dark w-25">
          Back
        </button>
      </div>
    </>
  );
};

export default SingleUser;
