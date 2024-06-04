import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "../components/Signin/Signin";
import ProjectDetails from "../components/ProjectDetails/ProjectDetails";
import { useSelector } from "react-redux";
import Main from "../components/Main/Main";

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
                element={<ProjectDetails />}
              />{" "}
            </Route>
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}
