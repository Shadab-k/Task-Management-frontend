import React, { useEffect, useState } from "react";
import "./TaskDetails.css"
import { useSelector } from "react-redux";

const TaskDetails = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = useSelector((state) => state.AuthSlice.token);

  const fetchTaskData = async () => {
    try {
      const res = await fetch(
        `http://localhost:5000/api/tasks/8cfdb4fb-7214-4cee-8bc3-8fba7f0b7464`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "auth-token": `Bearer ${token}`,
          },
        }
      );
      if (!res.ok) {
        throw new Error("Failed to fetch tasks");
      }
      const json = await res.json();
      setTasks(json);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTaskData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <div className="mt-3">
        {/* <h2 className="text-success">{project.project_name}</h2> */}
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
            </tr>
          </thead>
          <tbody>
            {tasks.map((item) => (
              <tr>
                <td>{item?.task_id}</td>
                <td>{item?.task_name}</td>
                <td>{item?.task_description}</td>

                <td>
                  {new Date(item?.start_date).toLocaleDateString("en-GB", {
                    timeZone: "UTC",
                  })}
                </td>
                <td>
                  {new Date(item?.end_date).toLocaleDateString("en-GB", {
                    timeZone: "UTC",
                  })}
                </td>
                <td>{item.developer}</td>
                <td>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TaskDetails;
