import React from "react";
import "./ProjectDetails.css";

const ProjectDetails = ({ project }) => {
  if (!project) {
    return <div>Select a project to see the details</div>;
  }

  return (
    <>

    
    
    </>
    



    // <div className="mt-3">
    //   {/* <h2 className="text-success">{project.project_name}</h2> */}
    //   <table className="table table-striped table-bordered">
    //     <thead className="thead-dark">
    //       <tr>
    //         <th scope="col">Milestone</th>
    //         <th scope="col">Start Date</th>
    //         <th scope="col">End Date</th>
    //         <th scope="col">Developer</th>
    //         <th scope="col">Billable/Non-Billable</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       <tr>
    //         <td>{project.project_name}</td>
    //         <td>
    //           {new Date(project.start_date).toLocaleDateString("en-GB", {
    //             timeZone: "UTC",
    //           })}
    //         </td>
    //         <td>
    //           {new Date(project.end_date).toLocaleDateString("en-GB", {
    //             timeZone: "UTC",
    //           })}
    //         </td>
    //         <td>{project.developer}</td>
    //         <td>{project.status}</td>
    //       </tr>
    //     </tbody>
    //   </table>
    // </div>
  );
};

export default ProjectDetails;


