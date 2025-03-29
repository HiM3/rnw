import { NavLink } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="container text-center mt-5">
      <h1 className="mb-4">Welcome to User Manager</h1>
      <p className="lead">
        Manage your users efficiently with our simple user management system.
      </p>
      <div className="mt-4">
        <NavLink to="/create-user" className="btn btn-success me-3">
          Create user
        </NavLink>
        <NavLink to="/view-user" className="btn btn-primary">
          View users
        </NavLink>
      </div>
    </div>
  );
};

export default HomePage;
