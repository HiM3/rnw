import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const HomePage = () => {
  return (
    <div>
      <div className="container my-5">
        <div className="text-center mb-4">
          <h1>Welcome to User Management</h1>
          <p className="lead">Add, Edit, and Manage Users Efficiently!</p>
        </div>

        <div className="text-center mt-5">
          <NavLink to="/add" className="btn btn-success">
            Add New User
          </NavLink>
          <NavLink to="/view" className="btn btn-primary mx-3">
            View Users
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
