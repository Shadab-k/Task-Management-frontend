import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import NavbarBelow from "../NavbarBelow/NavbarBelow";
import CreateForm from "../Create Form/CreateForm";
import Footer from "../Footer/Footer";
import Modal from "../Modal/Modal";

const Main = () => {
  const [showModal, setShowModal] = useState(false);
  const handleOnShowModal = () => {
    setShowModal(true);
  };

  const handleOnHideModal = () => {
    setShowModal(false);
  };

  return (
    <main>
      {showModal && <Modal onClose={handleOnHideModal} />}
      <Navbar />
      <div className="container-fluid marketing p-0">
        <div className="row g-0">
          <div className="col-lg-2 col-md-3">
            <Sidebar onShowModal={handleOnShowModal} />
          </div>
          <div className="col-lg-10 col-md-9">
            <NavbarBelow />

            <CreateForm onShowModal={handleOnShowModal} />
          </div>
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default Main;
