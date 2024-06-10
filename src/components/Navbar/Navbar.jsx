import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { RiAdminFill } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
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
    <>
      {" "}
      <nav className="navbar navbar-light nav-color">
        
        <div className="container-fluid">
          <h1 className="navbar-brand">Task Management</h1>

          <div className="right_sider_option d-flex align-items-center justify-content-between">
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
          <div className="humber_btn"><RxHamburgerMenu /></div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
