import React from "react";
import "./Option2.css";
const Option2 = ({ texts }) => {
  return (
    <div className="option2-cont">
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
      <span className="open_btn">+</span>
    </div>
  );
};

export default Option2;
