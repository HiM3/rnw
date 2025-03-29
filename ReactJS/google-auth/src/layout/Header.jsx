import { onAuthStateChanged, signOut } from "firebase/auth";
import { NavLink } from "react-router-dom";
import { auth } from "../../firebase";
import { useEffect, useState } from "react";

const Header = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);
  function logout() {
    signOut(auth)
      .then(() => {
        alert("Logout successfully");
        localStorage.removeItem("userId");
      })
      .catch((err) => console.log(err));
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <NavLink className="navbar-brand" to="/HomePage">
          user Manager
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {user === null ? (
              "Login to continue"
            ) : (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/HomePage">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/create-user">
                    Create user
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/view-user">
                    View users
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="btn btn-danger"
                    to="/login"
                    onClick={logout}
                  >
                    Logout
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
