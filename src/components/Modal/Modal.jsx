import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./Modal.css";

const Modal = ({ onClose, onProjectCreate }) => {
  const token = useSelector((state) => state.AuthSlice.token);

  const [project, setProject] = useState({
    projectName: "",
    projectDescription: "",
    startDate: "",
    endDate: "",
    status: "",
    developer: "",
  });

  const developers = [
    "John Doe",
    "Alice Smith",
    "Bob Johnson",
    "Emily Brown",
    "Michael Wilson",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProject({ ...project, [name]: value });
  };

  const handleOnStatusSelect = (e) => {
    setProject({ ...project, status: e.target.value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:5000/api/project-post-details",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "auth-token": `Bearer ${token}`,
          },
          body: JSON.stringify(project),
        }
      );

      if (response.ok) {
        alert("Project details submitted successfully");
        const newProject = await response.json();
        onProjectCreate(newProject); // Notify parent component
        setProject({
          projectName: "",
          projectDescription: "",
          startDate: "",
          endDate: "",
          status: "",
          developer: "",
        });
      } else {
        alert("Unable to save data");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="modal show d-block" tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Create Project</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleOnSubmit}>
              <div className="mb-3">
                <label htmlFor="projectName" className="form-label">
                  Project Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="projectName"
                  name="projectName"
                  value={project.projectName}
                  onChange={handleChange}
                  placeholder="Enter project name"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="projectDescription" className="form-label">
                  Project Description
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="projectDescription"
                  name="projectDescription"
                  value={project.projectDescription}
                  onChange={handleChange}
                  placeholder="Enter project description"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="startDate" className="form-label">
                  Start Date
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="startDate"
                  name="startDate"
                  value={project.startDate}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="endDate" className="form-label">
                  End Date
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="endDate"
                  name="endDate"
                  value={project.endDate}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="developer" className="form-label">
                  Developer
                </label>
                <select
                  className="form-control"
                  id="developer"
                  name="developer"
                  value={project.developer}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Select Developer
                  </option>
                  {developers.map((dev, index) => (
                    <option key={index} value={dev}>
                      {dev}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="status" className="form-label">
                  Billable/Non-Billable
                </label>
                <select
                  className="form-control"
                  id="status"
                  name="status"
                  value={project.status}
                  onChange={handleOnStatusSelect}
                  required
                >
                  <option value="" disabled>
                    Select status
                  </option>
                  <option value="Billable">Billable</option>
                  <option value="Non-Billable">Non-Billable</option>
                </select>
              </div>
              <button type="submit" className="btn btn-dark">
                Create Project
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
