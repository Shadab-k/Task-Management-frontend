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
import TaskDetails from "../TaskDetails/TaskDetails";

const Main = () => {
  const [showModal, setShowModal] = useState(false);
  const [showAddTaskModal, setShowAddTaskModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [submittedProject, setSubmittedProject] = useState(null);
  const [submittedTask, setSubmittedTask] = useState(null);
  const [isFirstLogin, setIsFirstLogin] = useState(false);
  const [projectId, setProjectId] = useState('');
  const [taskId, setTaskId] = useState('');

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
          console.log("Projects Data", projectData);
          setProjects(projectData);

          if (projectData.length > 0) {
            setSelectedProject(projectData[projectData.length - 1]); // Set the last project
            setProjectId(projectData[projectData.length - 1].project_id);
            console.log("Project Id", projectData[projectData.length - 1].project_id);
          }
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchUserData();
  }, [submittedProject, token]);

  useEffect(() => {
    if (selectedProject) {
      setProjectId(selectedProject.project_id);
    }
  }, [selectedProject]);

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
    setProjectId(project.project_id);
  };

  const handleProjectCreate = (project) => {
    setSubmittedProject(project);
    setShowModal(false);
    setIsFirstLogin(false);
  };

  const handleTaskCreate = (task) => {
    setSubmittedTask(task)
    setShowAddTaskModal(false);
    setIsFirstLogin(false);
  };

  console.log("Projects", projects);

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
          projectId={projectId} // Pass projectId to AddTaskModal
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
              selectedProject && (
                <>
                  <ProjectDetails project={selectedProject} />
                  <TaskDetails projectId={projectId} taskId={taskId} submittedTask={submittedTask} />
                </>
              )
            )}
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
};

export default Main;

