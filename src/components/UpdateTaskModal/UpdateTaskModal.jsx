import React, { useState } from "react";
import { useSelector } from "react-redux";
// import "./UpdateTaskModal.css";

const UpdateTaskModal = ({ onTaskCreate, onClose, projectId }) => {
  const token = useSelector((state) => state.AuthSlice.token);

  const [task, setTask] = useState({
    taskName: "",
    taskDescription:"",
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
    setTask({ ...task, [name]: value });
  };

  const handleOnStatusSelect = (e) => {
    setTask({ ...task, status: e.target.value });
  };

  const handleOnSubmit = async (e,taskId ) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:5000/api/update-task/${taskId}`, // Use projectId from props
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "auth-token": `Bearer ${token}`,
          },
          body: JSON.stringify(task),
        }
      );

      if (response.ok) {
        alert("Task details submitted successfully");
        const newTask = await response.json();
        onTaskCreate(newTask); // Notify parent component
       
      } else {
        alert("Unable to save task data");
      }
    } catch (error) {
      console.error("Error submitting Task details:", error);
    }
  };

  return (
    <div className="modal show d-block" tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Update Task</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleOnSubmit}>
              <div className="mb-3">
                <label htmlFor="taskName" className="form-label">
                  Task Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="taskName"
                  name="taskName"
                  maxLength={60}
                  value={task.taskName}
                  onChange={handleChange}
                  placeholder="Enter project name"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="taskDescription" className="form-label">
                  Task Description
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="taskDescription"
                  name="taskDescription"
                  value={task.taskDescription}
                  maxLength={500}
                  onChange={handleChange}
                  placeholder="Enter task description"
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
                  value={task.startDate}
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
                  value={task.endDate}
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
                  value={task.developer}
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
                  value={task.status}
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
                Update Task
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateTaskModal;
