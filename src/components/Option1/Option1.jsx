import React from "react";
import "./Option1.css";
const Option1 = ({ texts }) => {
  return (
    <div className="option1-cont">
      {texts.map((ele, indx) => {
        return indx == 0 ? (
          <div key={indx}>
            <input type="checkbox" />
            {ele}
          </div>
        ) : (
          <div key={indx}>{ele}</div>
        );
      })}
    </div>
  );
};

export default Option1;
