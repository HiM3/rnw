import React from 'react';
// import Home from '../pages/Home';
const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg w-100 border bg-white mb-2">
        <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href='{Home}'>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="./mypro2.html">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="./mypro3.html">Menu</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header;
