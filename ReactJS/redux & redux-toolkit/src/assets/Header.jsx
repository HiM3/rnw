import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          User Management
        </Link>
        <ul className=" nav text-decoration-none">
          <li className="nav-item">
            <Link className="nav-link" to="/create">
              Create
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/View">
              View
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
