import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="header">
      <div className="logo">
        <img
          src="https://livingwhole.sanpurple.shop/assets/images/logo-livingwhole.jpg"
          alt="log-living whole"
        />
      </div>
      <div className="links">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Tapas</a>
          </li>
          <li>
            <a href="#">Courses</a>
          </li>
          <li>
            <a href="#">Live Sessions</a>
          </li>
          <li>
            <a href="#">Facilitators</a>
          </li>
          <li>
            <a href="#">Membership</a>
          </li>
          <li>
            <a href="#">Join As Facilitators</a>
          </li>
        </ul>
      </div>
      <div className="nav-btn">
        <button>Sign In</button>
      </div>
    </header>
  );
};

export default Navbar;
