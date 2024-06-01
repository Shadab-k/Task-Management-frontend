import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import ProjectDetails from "../ProjectDetails/ProjectDetails"; 
import { useDispatch, useSelector } from "react-redux";

const CreateForm = () => {
  const dispatch = useDispatch()
  const name = useSelector((state) => state.NameSlice.name);
  
  const [showModal, setShowModal] = useState(false);
  const [submittedProject, setSubmittedProject] = useState(null); // State to store submitted project
  // const navigate = useNavigate();
  const [project, setProject] = useState({
    projectName: "",
    startDate: "",
    endDate: "",
    status: "",
    developer: "", // Adding developer field
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
      const response = await fetch("http://localhost:5000/api/project-details", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(project),
      });

      if (response.ok) {
        alert("Project details submitted successfully");
        setSubmittedProject(project); // Store submitted project
        // dispatch({ type: "Name/SET_NAME", payload: project.projectName });
        setShowModal(false);
      } else {
        alert("Unable to save data");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <Navbar />

      {!submittedProject && ( // Show form if project is not submitted
        <div className="d-flex justify-content-center align-items-center create-project-btn">
          <button className="btn-lg btn-dark " onClick={() => setShowModal(true)}>
            Create Project
          </button>
        </div>
      )}

      {showModal && (
        <div className="modal show d-block" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Create Project</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
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
      )}

      {submittedProject && <ProjectDetails project={submittedProject} />} {/* Render project details component if project is submitted */}
    </>
  );
};

export default CreateForm;


// import React, { useState } from "react";
// import Navbar from "../Navbar/Navbar";
// import { useNavigate } from "react-router-dom";
// import "./CreateForm.css";

// const CreateForm = () => {
//   const [showModal, setShowModal] = useState(false);
//   const navigate = useNavigate();
//   const [project, setProject] = useState({
//     projectName: "",
//     startDate: "",
//     endDate: "",
//     status: "",
//     developer: "", // Adding developer field
//   });

//   const developers = [
//     "John Doe",
//     "Alice Smith",
//     "Bob Johnson",
//     "Emily Brown",
//     "Michael Wilson",
//   ];

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProject({ ...project, [name]: value });
//   };

//   const handleOnStatusSelect = (e) => {
//     setProject({ ...project, status: e.target.value });
//   };

//   const handleOnSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch("http://localhost:5000/api/project-details", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(project),
//       });

//       if (response.ok) {
//         alert("Project details submitted successfully");
//         setProject({
//           projectName: "",
//           startDate: "",
//           endDate: "",
//           status: "",
//           developer: "", // Adding developer field
//         });
//         navigate("/project-details");
//       } else {
//         alert("Unable to save data");
//       }
//     } catch (error) {
//       console.error("Error submitting form:", error);
//     }
//   };

//   const handleOnShowModal = () => {
//     setShowModal(true);
//   };

//   const handleOnCloseModal = () => {
//     setShowModal(false);
//   };

//   return (
//     <>
//       <Navbar />

//       <div className="d-flex justify-content-center align-items-center my-5">
//         <button className="btn btn-dark" onClick={handleOnShowModal}>
//           Create Project
//         </button>
//       </div>

//       {showModal && (
//         <div className="modal show d-block" tabindex="-1">
//           <div className="modal-dialog">
//             <div className="modal-content">
//               <div className="modal-header">
//                 <h5 className="modal-title">Create Project</h5>
//                 <button
//                   type="button"
//                   className="btn-close"
//                   onClick={handleOnCloseModal}
//                 ></button>
//               </div>
//               <div className="modal-body">
//                 <form onSubmit={handleOnSubmit}>
//                   <div className="mb-3">
//                     <label htmlFor="projectName" className="form-label">
//                       Project Name
//                     </label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       id="projectName"
//                       name="projectName"
//                       value={project.projectName}
//                       onChange={handleChange}
//                       required
//                     />
//                   </div>
//                   <div className="mb-3">
//                     <label htmlFor="startDate" className="form-label">
//                       Start Date
//                     </label>
//                     <input
//                       type="date"
//                       className="form-control"
//                       id="startDate"
//                       name="startDate"
//                       value={project.startDate}
//                       onChange={handleChange}
//                       required
//                     />
//                   </div>
//                   <div className="mb-3">
//                     <label htmlFor="endDate" className="form-label">
//                       End Date
//                     </label>
//                     <input
//                       type="date"
//                       className="form-control"
//                       id="endDate"
//                       name="endDate"
//                       value={project.endDate}
//                       onChange={handleChange}
//                       required
//                     />
//                   </div>
//                   <div className="mb-3">
//                     <label htmlFor="developer" className="form-label">
//                       Developer
//                     </label>
//                     <select
//                       className="form-control"
//                       id="developer"
//                       name="developer"
//                       value={project.developer}
//                       onChange={handleChange}
//                       required
//                     >
//                       <option value="" disabled>
//                         Select Developer
//                       </option>
//                       {developers.map((dev, index) => (
//                         <option key={index} value={dev}>
//                           {dev}
//                         </option>
//                       ))}
//                     </select>
//                   </div>
//                   <div className="mb-3">
//                     <label htmlFor="status" className="form-label">
//                       Billable/Non-Billable
//                     </label>
//                     <select
//                       className="form-control"
//                       id="status"
//                       name="status"
//                       value={project.status}
//                       onChange={handleOnStatusSelect}
//                       required
//                     >
//                       <option value="" disabled>
//                         Select status
//                       </option>
//                       <option value="Billable">Billable</option>
//                       <option value="Non-Billable">Non-Billable</option>
//                     </select>
//                   </div>
//                   <button type="submit" className="btn btn-dark">
//                     Create Project
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default CreateForm;
