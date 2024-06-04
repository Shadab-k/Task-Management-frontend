import React, { useState } from "react";
import "./Signin.css";
import { useDispatch } from "react-redux";

const Signin = () => {
  const dispatch = useDispatch();
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (!credentials.email) {
      return alert("Email cannot be blank");
    }
    if (!credentials.password) {
      return alert("Password cannot be blank");
    }

    try {
      const res = await fetch(`http://localhost:5000/api/signin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
        }),
      });
      const json = await res.json();
      console.log("json", json);

      if (json.success) {
        dispatch({ type: "Auth/SET_TOKEN", payload: json.authToken });
      } else {
        if (json.errors) {
          // Display validation errors returned from the API
          json.errors.forEach((error) => {
            alert(error.msg);
          });
        } else if (json.error) {
          // Display specific error messages for email and password
          if (json.error === "Invalid email") {
            alert("Please enter a valid email");
          } else if (json.error === "Invalid password") {
            alert("Please enter a valid password");
          } else {
            // General error message
            alert(json.error);
          }
        }
      }
    } catch (error) {
      console.error("Invalid Credentials", error);
    }
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };
  return (
    <>
      <div className="container">
        <div className="container d-flex justify-content-center my-5">
          <form onSubmit={handleOnSubmit}>
            <div className="mb-3">
              <h1 className="my-5 text-dark">Task Management</h1>
              <label htmlFor="Email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                aria-describedby="emailHelp"
                onChange={onChange}
                value={credentials.email}
              />
              <div id="email" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                name="password"
                id="password"
                onChange={onChange}
                value={credentials.password}
                autoComplete="off"
              />
            </div>
            <button type="submit" className="my-3 btn btn-primary">
              Signin
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signin;
