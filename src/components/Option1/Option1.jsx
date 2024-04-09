import React from "react";
import "./Option1.css";
const Option1 = ({ texts, selectAll, setSelectAll }) => {
  return (
    <div className="option1-cont">
      {texts.map((ele, indx) => {
        return indx == 0 ? (
          <div key={indx}>
            <input type="checkbox" onClick={() => setSelectAll(!selectAll)} />
            {ele}
          </div>
        ) : (
          <div key={indx}>
            {indx == 1 ? (
              <>
                <span>{ele}</span> <span className="sqft">(in sqft)</span>
              </>
            ) : (
              ele
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Option1;
