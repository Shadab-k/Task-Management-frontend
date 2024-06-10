import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaTasks } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";

const Sidebar = ({ onShowModal, onSelectProject }) => {
  const [credentials, setCredentials] = useState([]);
  const token = useSelector((state) => state.AuthSlice.token);

  const fetchedData = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/get-project-form-details`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": `Bearer ${token}`,
        },
      });
      const data = await res.json();
      setCredentials(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchedData();
  }, []);

  // Add a useEffect to fetch data when a project is submitted
  useEffect(() => {
    fetchedData();
  }, [onSelectProject]); // Fetch data when a project is selected

  return (
    <div className="sidebar" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel" style={{ visibility: "visible" }}>
      <div className="offcanvas-body">
        <div className="title_head">
          <h5 className="text-white">
            <FaTasks className="mx-2" />
            Project List
            <button className="btn-sm plus mx-4" onClick={onShowModal}>
              +
            </button>
          </h5>
        </div>
        <div className="list_items">
          <ul>
            {credentials.length > 0 ? (
              credentials.map((item) => (
                <li key={item.project_id}>
                  <Link to="#" onClick={() => onSelectProject(item)}>
                    {item.project_name}
                  </Link>
                </li>
              ))
            ) : (
              <div>No data available</div>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;





// import React, { useEffect, useState } from "react";
// import "./Sidebar.css";
// import { Link } from "react-router-dom";

// const Sidebar = ({ onSelectProject, setHasData, submittedProject }) => {
//   const [credentials, setCredentials] = useState([]);

//   const fetchedData = async () => {
//     try {
//       const res = await fetch(`http://localhost:5000/api/project-form-details`, {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
//       const data = await res.json();
//       setCredentials(data);
//       // setHasData(data.length > 0);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   useEffect(() => {
//     fetchedData();
//   }, []);

//   useEffect(() => {
//     if (submittedProject) {
//       fetchedData();
//     }
//   }, [submittedProject]);

//   return (
//     <div
//       className="sidebar offcanvas-start show"
//       tabIndex="-1"
//       id="offcanvasExample"
//       aria-labelledby="offcanvasExampleLabel"
//       style={{ visibility: "visible" }}
//     >
//       <div className="offcanvas-body">
//         <div className="list_items">
//           <ul>
//             <li>Project List</li>
//           </ul>
//         </div>

//         <div className="project-name">
//           <ul>
//             {credentials.length > 0 ? (
//               credentials.map((item) => (
//                 <div key={item.id}>
//                   <Link
//                     to="#"
//                     style={{ textDecoration: "none", color: "black" }}
//                     onClick={() => {
//                       onSelectProject(item);
//                       setHasData(true);
//                     }}
//                   >
//                     <li>{item.project_name}</li>
//                   </Link>
//                 </div>
//               ))
//             ) : (
//               <div>No data available</div>
//             )}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
