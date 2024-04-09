import React from "react";
import "./Drawer.css";

const Drawer = ({ drawerOpen, setDrawerOpen }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log("Client:", formData.get("name"));
    console.log("Date of Commencement:", formData.get("date"));
    console.log("Date of Completion:", formData.get("date_completion"));
    console.log("RFQ Code:", formData.get("code"));
  };

  return (
    <div className={`drawer_main_cont ${drawerOpen ? "open" : ""}`}>
      <div className="drawer_heading">
        <div>Workorder</div>
        <span
          className="material-icons"
          onClick={() => setDrawerOpen(!drawerOpen)}
        >
          close
        </span>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Client</label>
        <select name="name">
          <option value="">Client Name</option>
          <option value="john">John Doe</option>
          <option value="max">Max Well</option>
          <option value="alex">Alex Star</option>
        </select>
        <label htmlFor="date">Date of Commencement</label>
        <input
          className="input_drawer"
          type="date"
          name="date"
          placeholder="dd/mm/yyyy"
        />
        <label htmlFor="date_completion">Date of Completion</label>
        <input className="input_drawer" type="date" name="date_completion" />
        <label htmlFor="code">RFQ Code</label>
        <input
          className="input_drawer"
          type="text"
          name="code"
          placeholder="RFQ Code"
        />
        <button className="form_submit_button">Done</button>
      </form>
    </div>
  );
};

export default Drawer;
