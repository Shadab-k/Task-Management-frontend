import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "../components/Signin/Signin";
import ProjectDetails from "../components/ProjectDetails/ProjectDetails";
import { useSelector } from "react-redux";
import Main from "../components/Main/Main";
import Home from "../components/Home/Home";
import TaskDetails from "../components/TaskDetails/TaskDetails";

export default function Routers() {
  const { token } = useSelector((state) => state.AuthSlice);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          {!token ? (
            <Route>
              <Route path="/" element={<Signin />} />
            </Route>
          ) : (
            <Route>
              <Route path="/" element={<Main />} />
              <Route
                path="/project-details"
                element={<TaskDetails />}
              />{" "}
            </Route>
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}
