import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { RiAdminFill } from "react-icons/ri";

const Navbar = () => {
  const token = useSelector((state) => state.AuthSlice.token);
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const fetchData = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/getuser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": `Bearer ${token}`,
        },
      });
      const json = await res.json();
      setName(json.name);
      console.log("User data:", json);
      console.log("Name of the User:", json.name);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    if (token) {
      fetchData();
    }
  }, [token]);

  const handleOnLogout = () => {
    dispatch({ type: "Auth/SET_TOKEN", payload: "" });
  };

  return (
    <nav className="navbar navbar-light nav-color w-100%">
      <div className="container-fluid">
        <h1 className="navbar-brand">Task Management</h1>

        <div className="user-heading">
          <p>
            <RiAdminFill className="mx-1" />
            Welcome {name}
          </p>
        </div>

        <form className="d-flex">
          <button
            className="btn btn-danger"
            onClick={handleOnLogout}
            type="button"
          >
            Logout
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
