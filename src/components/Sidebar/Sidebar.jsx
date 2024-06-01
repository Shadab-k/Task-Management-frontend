import React from "react";
import { useSelector } from "react-redux";
import "./Sidebar.css";

const Sidebar = () => {
  const name = useSelector((state) => state.NameSlice.name);

  return (
    <div
      className="sidebar offcanvas-start show"
      tabIndex="-1"
      id="offcanvasExample"
      aria-labelledby="offcanvasExampleLabel"
      style={{ visibility: "visible" }}
    >
      <div className="offcanvas-body">
        <div className="list_items">
          <ul>
            <li>Project List</li>
          </ul>
        </div>
        <div className="project-name">
          <h4>{name}</h4>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
