import React, { useEffect, useState } from "react";
import "./ProjectDetails.css"

const ProjectDetails = () => {
  const [credentials, setCredentials] = useState([]);
  const [heading, setHeading] = useState("");

  const fetchedData = async () => {
    try {
      const res = await fetch(
        `http://localhost:5000/api/project-form-details`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.json();
      setCredentials(data);
      setHeading(data[0].project_name);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  console.log("Credetials", credentials);

  useEffect(() => {
    fetchedData();
  }, []);

  return (
    <>
   
      <div className="container mt-5">
        <h2>
          {" "}
          Project Name : <span className="text-success">{heading}</span>
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
            {credentials.length !== 0 ? (
              credentials.map((item, index) => (
                <tr key={index}>
                  <td>{item.project_name}</td>
                  <td>
                    {new Date(item.start_date).toLocaleDateString("en-GB", {
                      timeZone: "UTC",
                    })}
                  </td>

                  <td>
                    {new Date(item.end_date).toLocaleDateString("en-GB", {
                      timeZone: "UTC",
                    })}
                  </td>

                  <td>{item.developer}</td>
                  <td>{item.status}</td>
                </tr>
              ))
            ) : (
              <h3 className="my-2 text-danger">No data to display</h3>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ProjectDetails;
