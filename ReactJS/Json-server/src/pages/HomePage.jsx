import { NavLink } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <div>
        <div className="container my-5">
          <div className="text-center mb-4">
            <h1>Welcome to Task Management</h1>
            <p className="lead">Add, Edit, and Manage Task Efficiently!</p>
          </div>

          <div className="text-center mt-5">
            <NavLink to="/create" className="btn btn-success">
              Add New Task
            </NavLink>
            <NavLink to="/view" className="btn btn-primary mx-3">
              View Task
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
