import React, { useState } from "react";
import "./WorkOrderCreation.css";
import Overview from "../../components/Overview/Overview";

const WorkOrderCreation = () => {
  const [openedTab, setOpenedTab] = useState(0); // Destructuring the array correctly
  return (
    <div className="main_cont">
      <div className="control_bar">
        <div>👈 Create Workorder</div>
        <button>Save</button>
      </div>
      <div className="tab_select">
        <div onClick={() => setOpenedTab(0)}>Overview</div>
        <div className="unselected_box" onClick={() => setOpenedTab(1)}>
          Other
        </div>
      </div>
      {openedTab === 0 ? <Overview /> : console.log("Hello World")}
    </div>
  );
};

export default WorkOrderCreation;
