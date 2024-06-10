import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import NavbarBelow from "../NavbarBelow/NavbarBelow";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <>
      <div className="container_wrap">
        <div className="aside_bar">
          <Sidebar />
        </div>
        <div className="inner_container">
          <Navbar />
          <div className="px-3 py-3">
            <NavbarBelow />
          </div>
          <Footer />
        </div>
      </div>
      {/* <div className="container_wrap">
      
        <div className="aside_bar">
          <Sidebar
            onShowModal={handleOnShowModal}
            onSelectProject={handleProjectSelect}
            submittedProject={submittedProject}
          />
        </div>
        <div className="inner_container">
        <Navbar />
          <NavbarBelow
            selectedProjectName={
              selectedProject ? selectedProject.project_name : null
            }
          />
          <Footer />
        </div>
      </div> */}
    </>
  );
};

export default Home;

// import React, { useEffect, useState } from "react";
// import Navbar from "../Navbar/Navbar";
// import Sidebar from "../Sidebar/Sidebar";
// import NavbarBelow from "../NavbarBelow/NavbarBelow";
// import Footer from "../Footer/Footer";
// import { useSelector } from "react-redux";
// import CreateForm from "../Create Form/CreateForm";
// import ProjectDetails from "../ProjectDetails/ProjectDetails";

// const Home = () => {
//   const [showModal, setShowModal] = useState(false);
//   const [selectedProject, setSelectedProject] = useState(null);
//   const [submittedProject, setSubmittedProject] = useState(null);
//   const [isFirstLogin, setIsFirstLogin] = useState(false);
//   const [projects, setProjects] = useState([]);
//   const token = useSelector((state) => state.AuthSlice.token);

//   useEffect(() => {
//     // Fetch user data to determine if it is the first login
//     const fetchUserData = async () => {
//       try {
//         const res = await fetch(`http://localhost:5000/api/is-first-login`, {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//             "auth-token": `Bearer ${token}`,
//           },
//         });
//         const data = await res.json();
//         setIsFirstLogin(data.isFirstLogin);

//         if (!data.isFirstLogin) {
//           const projectRes = await fetch(
//             `http://localhost:5000/api/get-project-form-details`,
//             {
//               method: "GET",
//               headers: {
//                 "Content-Type": "application/json",
//                 "auth-token": `Bearer ${token}`,
//               },
//             }
//           );
//           const projectData = await projectRes.json();
//           setProjects(projectData);
//           if (projectData.length > 0) {
//             setSelectedProject(projectData[0]);
//           }
//         }
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchUserData();
//   }, [submittedProject, token]);

//   const handleOnShowModal = () => {
//     setShowModal(true);
//   };

//   const handleOnHideModal = () => {
//     setShowModal(false);
//   };

//   const handleProjectSelect = (project) => {
//     setSelectedProject(project);
//   };

//   const handleProjectCreate = (project) => {
//     setSubmittedProject(project);
//     setShowModal(false);
//     setIsFirstLogin(false);
//   };
//   return (
//     <>

//       <div className="container_wrap">
//         <div className="aside_bar">
//           <Sidebar
//             onShowModal={handleOnShowModal}
//             onSelectProject={handleProjectSelect}
//             submittedProject={submittedProject}
//           />
//         </div>
//         <div className="inner_container">
//           <Navbar />
//           <div className="px-3 py-3">
//             <NavbarBelow
//               selectedProjectName={
//                 selectedProject ? selectedProject.project_name : null
//               }
//             />
//             {isFirstLogin ? (
//               <CreateForm onShowModal={handleOnShowModal} />
//             ) : (
//               selectedProject && <ProjectDetails project={selectedProject} />
//             )}
//           </div>
//           <Footer />
//         </div>

//       </div>
//       {/* <div className="container_wrap">

//         <div className="aside_bar">
//           <Sidebar
//             onShowModal={handleOnShowModal}
//             onSelectProject={handleProjectSelect}
//             submittedProject={submittedProject}
//           />
//         </div>
//         <div className="inner_container">
//         <Navbar />
//           <NavbarBelow
//             selectedProjectName={
//               selectedProject ? selectedProject.project_name : null
//             }
//           />
//           <Footer />
//         </div>
//       </div> */}

//     </>
//   );
// };

// export default Home;
