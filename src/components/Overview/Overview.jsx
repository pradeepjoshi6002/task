import "./Overview.css";
import Option1 from "../Option1/Option1";
import Option2 from "../Option2/Option2";
import { useState } from "react";
const Overview = () => {
  const [selectAll, setSelectAll] = useState(false);
  return (
    <div className="overview_main_cont">
      <Option1
        texts={["Packages", "Rate", "Total"]}
        selectAll={selectAll}
        setSelectAll={setSelectAll}
      />
      <Option2
        texts={["Civil 1", "567.80", "2,98,6792"]}
        selectAll={selectAll}
      />
      <Option2
        texts={["Civil 2", "567.80", "2,98,6792"]}
        selectAll={selectAll}
      />
      <Option2
        texts={["Civil 3", "567.80", "2,98,6792"]}
        selectAll={selectAll}
      />
      <Option2
        texts={["Civil 4", "567.80", "2,98,6792"]}
        selectAll={selectAll}
      />
      <Option2
        texts={["Civil 5", "567.80", "2,98,6792"]}
        selectAll={selectAll}
      />
    </div>
  );
};

export default Overview;
