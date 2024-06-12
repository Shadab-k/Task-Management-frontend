import React, { useEffect, useState } from "react";
import "./TaskDetails.css";
import { useSelector } from "react-redux";
import { GrUpdate } from "react-icons/gr";
import { RiDeleteBin6Fill } from "react-icons/ri";
import UpdateTaskModal from "../UpdateTaskModal/UpdateTaskModal";

const TaskDetails = ({ projectId, submittedTask,onUpdateTask }) => {
  const [tasks, setTasks] = useState([]);
  
  const token = useSelector((state) => state.AuthSlice.token);

  const fetchTaskData = async (projectId) => {
    if (!projectId) return;

    try {
      const res = await fetch(`http://localhost:5000/api/tasks/${projectId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        throw new Error(`Error fetching tasks: ${res.statusText}`);
      }

      const json = await res.json();
      console.log("Fetched Task Data:", json);
      // Sort tasks alphabetically by task name
      const sortedTasks = json.sort((a, b) =>
        a.task_name.localeCompare(b.task_name)
      );
      setTasks(sortedTasks);
    } catch (error) {
      console.error("Error fetching task data:", error);
    }
  };

  const OnDeleteTask = async (taskId) => {
    try {
      const resp = await fetch(
        `http://localhost:5000/api/delete-task/${taskId}`,
        {
          method: "DELETE",
          headers: {
            Content_type: "application/json",
            "auth-token": `Bearer ${token}`,
          },
        }
      );

      if (!resp.ok) {
        alert("Error occured while deleting task");
       
      }
      alert("Task Deleted Successfully");
      fetchTaskData(projectId);
    } catch (error) {
      console.error("Error deleting task:", error);
      alert("An error occurred while deleting task");
    }
  };

  useEffect(() => {
    console.log("Fetching tasks for project ID:", projectId);
    fetchTaskData(projectId);
  }, [projectId, submittedTask]);

  console.log("Current project ID:", projectId);

  return (
    <div>
      <div className="mt-3">
        <table className="table table-striped table-bordered">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Task ID</th>
              <th scope="col">Task Name</th>
              <th scope="col">Task Description</th>
              <th scope="col">Start Date</th>
              <th scope="col">End Date</th>
              <th scope="col">Developer</th>
              <th scope="col">Status</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.length > 0 ? (
              tasks.map((item) => (
                <tr key={item?.task_id}>
                  <td>{item?.task_id}</td>
                  <td>{item?.task_name}</td>
                  <td>{item?.task_description}</td>
                  <td>
                    {item?.start_date
                      ? new Date(item.start_date).toLocaleDateString("en-GB", {
                          timeZone: "UTC",
                        })
                      : "N/A"}
                  </td>
                  <td>
                    {item?.end_date
                      ? new Date(item.end_date).toLocaleDateString("en-GB", {
                          timeZone: "UTC",
                        })
                      : "N/A"}
                  </td>
                  <td>{item?.developer}</td>
                  <td>{item?.status}</td>
                  <td>
                    <GrUpdate className="mx-2 icons" onClick={<UpdateTaskModal onUpdateTask={onUpdateTask}/>} />
                    <RiDeleteBin6Fill
                      className="icons"
                      onClick={() => OnDeleteTask(item.task_id)}
                    />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="text-center">No tasks available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TaskDetails;
