import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateForm from "../components/Create Form/CreateForm";
import Signin from "../components/Signin/Signin";
import ProjectDetails from "../components/ProjectDetails/ProjectDetails";
import AboutUs from "../components/About/AboutUs";
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
              {/* <Route path="/about" element={<AboutUs />} /> */}
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
