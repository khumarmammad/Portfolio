import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Haqqında</Link>
        </li>
        <li>
          <Link to="/work-samples">İş nümunələri</Link>
        </li>
        <li>
          <Link to="/contact">Əlaqə məlumatları</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
