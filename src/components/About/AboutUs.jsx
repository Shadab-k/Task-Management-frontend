import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import NavbarBelow from "../NavbarBelow/NavbarBelow";
import Navbar from "../Navbar/Navbar";

const AboutUs = () => {
  return (
    <main>
        <Navbar></Navbar>
      <div className="container-fluid marketing p-0">
        <div className="row g-0">
          <div className="col-lg-2 col-md-3">
            <Sidebar></Sidebar>
          </div>
          <div className="col-lg-10 col-md-9">
            <NavbarBelow></NavbarBelow>
          </div>
        </div>
        </div>
      {/* <footer className="container">
        <p className="float-end">
          <a href="#">Back to top</a>
        </p>
        <p>
          © 2017–2024 Company, Inc. · <a href="#">Privacy</a> ·{" "}
          <a href="#">Terms</a>
        </p>
      </footer> */}
    </main>
  );
};

export default AboutUs;
