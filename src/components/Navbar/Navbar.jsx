import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Sidebar from "../Sidebar/Sidebar";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-light nav-color">
        <div className="container-fluid">
          <h1 className="navbar-brand">Task Management</h1>

          <form className="d-flex">
            <Link to="/project-details">
              <button className="btn btn-danger" type="submit">
                Logout
              </button>
            </Link>
          </form>
        </div>
      </nav>
      <Sidebar />
    </>
  );
};

export default Navbar;
