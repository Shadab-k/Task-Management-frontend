import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import CreateForm from "../components/Create Form/CreateForm";
import Signin from "../components/Signin/Signin";

export default function Routers() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CreateForm />} />
          
          {/* <Route path="/project-details" element={<ProjectDetails />} /> */}
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}
