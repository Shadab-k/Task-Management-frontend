import React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import NavbarBelow from "../NavbarBelow/NavbarBelow";
import CreateForm from "../Create Form/CreateForm";
import Footer from "../Footer/Footer";

const Main = () => {
  return (
    <main>
      <Navbar />
      <div className="container-fluid marketing p-0">
        <div className="row g-0">
          <div className="col-lg-2 col-md-3">
            <Sidebar />
          </div>
          <div className="col-lg-10 col-md-9">
            <NavbarBelow />
            <CreateForm />
          </div>
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default Main;
