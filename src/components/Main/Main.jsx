import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import NavbarBelow from "../NavbarBelow/NavbarBelow";
import CreateForm from "../Create Form/CreateForm";
import Footer from "../Footer/Footer";
import Modal from "../Modal/Modal";
import ProjectDetails from "../ProjectDetails/ProjectDetails";
import { useSelector } from "react-redux";
import AddTaskModal from "../AddTaskModal/AddTaskModal";

const Main = () => {
  const [showModal, setShowModal] = useState(false);
  const [showAddTaskModal, setShowAddTaskModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [submittedProject, setSubmittedProject] = useState(null);
  const [isFirstLogin, setIsFirstLogin] = useState(false);
  const [projects, setProjects] = useState([]);
  const token = useSelector((state) => state.AuthSlice.token);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/is-first-login`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "auth-token": `Bearer ${token}`,
          },
        });
        const data = await res.json();
        setIsFirstLogin(data.isFirstLogin);

        if (!data.isFirstLogin) {
          const projectRes = await fetch(
            `http://localhost:5000/api/get-project-form-details`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                "auth-token": `Bearer ${token}`,
              },
            }
          );
          const projectData = await projectRes.json();
          setProjects(projectData);
          if (projectData.length > 0) {
            setSelectedProject(projectData[projectData.length - 1]); // Set the last project
          }
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchUserData();
  }, [submittedProject, token]);

  const handleOnShowModal = () => {
    setShowModal(true);
  };

  const handleOnShowAddTaskModal = () => {
    setShowAddTaskModal(true);
  };

  const handleOnHideModal = () => {
    setShowModal(false);
  };

  const handleOnHideAddTaskModal = () => {
    setShowAddTaskModal(false);
  };

  const handleProjectSelect = (project) => {
    setSelectedProject(project);
  };

  const handleProjectCreate = (project) => {
    setSubmittedProject(project);
    setShowModal(false);
    setIsFirstLogin(false);
  };

  const handleTaskCreate = () => {
    setShowAddTaskModal(false);
    setIsFirstLogin(false);
  };

  return (
    <main>
      {showModal && (
        <Modal
          onClose={handleOnHideModal}
          onProjectCreate={handleProjectCreate}
        />
      )}

      {showAddTaskModal && (
        <AddTaskModal
          onClose={handleOnHideAddTaskModal}
          onTaskCreate={handleTaskCreate}
        />
      )}
      <div className="container_wrap">
        <div className="aside_bar">
          <Sidebar
            onShowModal={handleOnShowModal}
            onSelectProject={handleProjectSelect}
            submittedProject={submittedProject}
          />
        </div>
        <div className="inner_container">
          <Navbar />
          <div className="px-3 py-3">
            <NavbarBelow
              selectedProjectName={
                selectedProject ? selectedProject.project_name : null
              }
              onShowTaskModal={handleOnShowAddTaskModal}
              disableAddTask={isFirstLogin || projects.length === 0}
            />
            {isFirstLogin ? (
              <CreateForm onShowModal={handleOnShowModal} />
            ) : (
              selectedProject && <ProjectDetails project={selectedProject} />
            )}
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
};

export default Main;
