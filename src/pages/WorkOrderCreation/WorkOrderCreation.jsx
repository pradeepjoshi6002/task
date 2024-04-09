import React, { useState } from "react";
import "./WorkOrderCreation.css";
import Overview from "../../components/Overview/Overview";
import Drawer from "../../components/Drawer/Drawer";
const WorkOrderCreation = () => {
  const [openedTab, setOpenedTab] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <div className="main_cont">
      {drawerOpen && (
        <Drawer drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
      )}
      <div className="control_bar">
        <div>
          <span className="material-icons">arrow_back_ios</span> Create
          Workorder
        </div>
        <button onClick={() => setDrawerOpen(!drawerOpen)}>Save</button>
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
