import React, { useEffect } from "react";
import "./NavbarBelow.css";

const NavbarBelow = ({ selectedProjectName, onShowTaskModal, disableAddTask }) => {
  // Use useEffect to trigger an update when selectedProjectName changes
  useEffect(() => {
    // Code to handle the update
    // Here, you might want to update the state or trigger a re-render
  }, [selectedProjectName]); // This will re-run the effect whenever selectedProjectName changes

  return (
    <>
      <div className="top_header border-bottom">
        <div className="header_title">
          <h1>{selectedProjectName ? selectedProjectName : " "}</h1>
        </div>
      </div>
      <div className="mt-3">
        <button 
          className="btn btn-primary" 
          onClick={onShowTaskModal} 
          disabled={disableAddTask}
        >
          Add Task
        </button>
      </div>
    </>
  );
};

export default NavbarBelow;
