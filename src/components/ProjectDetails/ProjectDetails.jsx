import React from "react";
import "./ProjectDetails.css"; // Import the CSS file

const ProjectDetails = ({ selectedProject }) => {
  if (!selectedProject) {
    return <div>Please select a project from the sidebar.</div>;
  }

  return (
    <>
      <div className="container mt-5">
        <h2>
          <span className="text-success">{selectedProject.project_name}</span>
        </h2>
        <table className="table table-striped table-bordered">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Milestone</th>
              <th scope="col">Start Date</th>
              <th scope="col">End Date</th>
              <th scope="col">Developer</th>
              <th scope="col">Billable/Non-Billable</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{selectedProject.project_name}</td>
              <td>
                {new Date(selectedProject.start_date).toLocaleDateString(
                  "en-GB",
                  { timeZone: "UTC" }
                )}
              </td>
              <td>
                {new Date(selectedProject.end_date).toLocaleDateString(
                  "en-GB",
                  { timeZone: "UTC" }
                )}
              </td>
              <td>{selectedProject.developer}</td>
              <td>{selectedProject.status}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ProjectDetails;
