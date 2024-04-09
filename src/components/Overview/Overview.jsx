import React from "react";
import "./Overview.css";
import Option1 from "../Option1/Option1";
import Option2 from "../Option2/Option2";
const Overview = () => {
  return (
    <div className="overview_main_cont">
      <Option1 texts={["Packages", "Rate (in sqft)", "Total"]} />
      <Option2 texts={["Civil 1", "567.80", "Rs 2,98,6792"]} />
      <Option2 texts={["Civil 2", "567.80", "Rs 2,98,6792"]} />
      <Option2 texts={["Civil 3", "567.80", "Rs 2,98,6792"]} />
      <Option2 texts={["Civil 4", "567.80", "Rs 2,98,6792"]} />
      <Option2 texts={["Civil 5", "567.80", "Rs 2,98,6792"]} />
    </div>
  );
};

export default Overview;
