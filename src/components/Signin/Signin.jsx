import React from "react";
import Navbar from "../Navbar/Navbar";
import './Signin.css'

const Signin = () => {
  return (
    <>
      <Navbar />
      <div class="container">
        <div class="container d-flex justify-content-center my-5">
          <form>
            <div class="mb-3">
              <h1 class="my-5 text-dark">Task Management</h1>
              <label for="Email" class="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                id="email"
                name="email"
                aria-describedby="emailHelp"
                value=""
              />
              <div id="email" class="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">
                Password
              </label>
              <input
                type="password"
                class="form-control"
                name="password"
                id="password"
                value=""
              />
            </div>
            <button type="submit" class="my-3 btn btn-primary">
              Signin
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signin;
