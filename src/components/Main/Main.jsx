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


/*
"use client";
import Head from "next/head";
import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function ContactUs() {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [showModal, setShowModal] = useState(false);
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const handleOnChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear the error when the user starts typing again
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    let hasError = false;
    // Frontend validation
    if (!credentials.name) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: "Name cannot be blank",
      }));
      hasError = true;
    }
    if (!/^[a-zA-Z\s]+$/.test(credentials.name)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: "Name must contain only letters",
      }));
      hasError = true;
    }
    if (!credentials.email) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Email cannot be blank",
      }));
      hasError = true;
    }
    if (!/^\S+@\S+\.\S+(?<!\d)$/.test(credentials.email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Email is invalid",
      }));
      hasError = true;
    }
    if (!credentials.phone) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        phone: "Phone cannot be blank",
      }));
      hasError = true;
    }
    // if (!/^\d{10}$/.test(credentials.phone)) {
    //   setErrors((prevErrors) => ({
    //     ...prevErrors,
    //     phone: "Phone must be exactly 10 digits",
    //   }));
    //   hasError = true;
    // }

    if (!/^[1-9]\d{9}$/.test(credentials.phone)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        phone: "Phone must be exactly 10 digits and cannot start with zero",
      }));
      hasError = true;
    }
    if (!credentials.company) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        company: "Company Name cannot be blank",
      }));
      hasError = true;
    }
    if (/\d/.test(credentials.company)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        company: "Company Name must not contain numbers",
      }));
      hasError = true;
    }

    if (!credentials.message) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        message: "Message cannot be blank",
      }));
      hasError = true;
    }

    if (hasError) {
      return; // Exit early if there are validation errors
    }

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      if (response.ok) {
        // Handle success
        setShowModal(true);
        setCredentials({
          name: "",
          email: "",
          phone: "",
          company: "",
          message: "",
        });
        // alert("Contact information submitted successfully");
      } else {
        alert("Failed to submit contact information");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // useEffect hook to automatically hide modal after 5 seconds
  useEffect(() => {
    let timer: string | number | NodeJS.Timeout | undefined;
    if (showModal) {
      timer = setTimeout(() => {
        setShowModal(false);
      }, 2000);
    }
    return () => clearTimeout(timer);
  }, [showModal]);

  return (
    <>
      <section className="common_sec_gap contact_area border_t">
        <div className="max_container">
          <div className="d_grid grid50 grid_sm100 justify-between items_center bg_light_grey border_radius30">
            <div className="contact_detail bg_primary">
              <div className="w-full h-full">
                <div>
                  <span className="tag">Contact us</span>
                </div>
                <div className="heading_title mt-20">
                  <div className="heading_title">
                    <h2 className="text_white">
                      Contact us to request a quote today.
                    </h2>
                  </div>
                </div>
                <div className="mt-20">
                  <div className="tag_list">
                    <span>Email</span>
                    <p>
                      <a href="mailto:contact@xpressmiles.com">
                        contact@xpressmiles.com
                      </a>
                    </p>
                  </div>
                  <div className="tag_list">
                    <span>Email</span>
                    <p>
                      <a href="tel:01244811144">0124 481 1144</a>
                    </p>
                  </div>
                  <div className="tag_list">
                    <span>Address</span>
                    <p>
                      Plot No.- 404-405, Phase III, Udyog Vihar III, Sector 20,
                      Gurugram, Haryana 122016
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full">
              <form onSubmit={handleSubmit}>
                <div className="contact_form">
                  <div className="d_grid grid50 column_gap20 grid_md100 grid_sm100">
                    <div className="group_lable w-full">
                      <label>Name</label>
                      <input
                        type="text"
                        name="name"
                        value={credentials.name}
                        onChange={handleOnChange}
                        maxLength={20}
                        id=""
                        className="input_field"
                        placeholder="Enter your name"
                      />
                      {errors.name && (
                        <p className="error" style={{ color: "red" }}>
                          {errors.name}
                        </p>
                      )}
                    </div>
                    <div className="group_lable w-full">
                      <label>Email</label>
                      <input
                        type="email"
                        name="email"
                        value={credentials.email}
                        onChange={handleOnChange}
                        maxLength={20}
                        id=""
                        className="input_field"
                        placeholder="Enter your email"
                      />
                      {errors.email && (
                        <p className="error" style={{ color: "red" }}>
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="d_grid grid50 column_gap20 grid_md100 grid_sm100">
                    <div className="group_lable w-full">
                      <label>Phone</label>
                      <input
                        type="number"
                        name="phone"
                        value={credentials.phone}
                        onChange={handleOnChange}
                        id=""
                        minLength={10}
                        className="input_field"
                        placeholder="Enter your phone"
                      />
                      {errors.phone && (
                        <p className="error" style={{ color: "red" }}>
                          {errors.phone}
                        </p>
                      )}
                    </div>
                    <div className="group_lable w-full">
                      <label>Company</label>
                      <input
                        type="text"
                        name="company"
                        value={credentials.company}
                        maxLength={20}
                        onChange={handleOnChange}
                        id=""
                        className="input_field"
                        placeholder="Enter your company"
                      />
                      {errors.company && (
                        <p className="error" style={{ color: "red" }}>
                          {errors.company}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="d_grid column_gap20 grid_md100 grid_sm100">
                    <div className="group_lable w-full">
                      <label>Message</label>
                      <textarea
                        rows={8}
                        cols={12}
                        // maxLength={12}
                        name="message"
                        value={credentials.message}
                        onChange={handleOnChange}
                        id=""
                        className="input_field"
                        placeholder="Enter your message"
                      />
                      {errors.message && (
                        <p className="error" style={{ color: "red" }}>
                          {errors.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="d_grid gap15 mt-10">
                    <button className="btn btn_primary btn_block btn_lg border_radius10 w-full">
                      Get In Touch
                    </button>
                  </div>
                </div>
                {showModal && (
                  <div>
                    <div>
                      <p
                        style={{
                          textAlign: "center",
                          color: "blue",
                          fontSize: "16px",
                        }}
                      >
                        Data has been saved successfully{" "}
                      </p>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      <div>
        <div id="google-maps-display" className="w-full h-full">
          <iframe
            className="w-full h-full"
            style={{ height: 500 }}
            frameBorder={"0"}
            src="https://www.google.com/maps/embed/v1/place?q=Nirvasa+Healthcare+pvt.Ltd+Plot+No.-+404-405,+Phase+III,+Udyog+Vihar+III,+Sector+20,+Gurugram,+Haryana+122016&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          ></iframe>
        </div>
      </div>
    </>
  );
}
*/