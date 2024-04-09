import React, { useState } from "react";
import "./Option4.css";
const Option4 = ({ texts, isChosen }) => {
  const [opened, setOpened] = useState(false);
  return (
    <>
      <div className="option4-cont">
        {texts.map((ele, indx) => {
          return indx == 0 ? (
            <div key={indx}>
              <div className="links4">
                <div className="inside4_link"></div>
              </div>
              <input
                type="checkbox"
                checked={isChosen || opened}
                onClick={() => setOpened(!opened)}
              />
              {ele}
            </div>
          ) : (
            <div key={indx}>
              <div key={indx}>
                {indx == 2 ? (
                  <span className="money">
                    <span className="material-icons">currency_rupee</span>
                    <span>{ele}</span>
                  </span>
                ) : (
                  ele
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Option4;
