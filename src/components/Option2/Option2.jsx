import React, { useState } from "react";
import "./Option2.css";
import Option3 from "../Option3/Option3";
const Option2 = ({ texts, selectAll }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [opened, setOpened] = useState(false);
  function openOptions() {
    setOpened(!opened);
  }
  return (
    <div className="option2-cont-main">
      <div className="option2-cont">
        {texts.map((ele, indx) => {
          return indx == 0 ? (
            <div key={indx}>
              <input
                type="checkbox"
                checked={selectAll || isChecked}
                onClick={() => setIsChecked(!isChecked)}
              />
              <span className="option2-first">{ele}</span>
            </div>
          ) : (
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
          );
        })}
        <span onClick={openOptions} className="open_btn2">
          {opened == true ? "-" : "+"}
        </span>
      </div>
      {opened == true ? (
        <>
          <Option3
            texts={["Activity 1", "567.80", "2,98,6792"]}
            isChecked={isChecked || selectAll}
          />
          <Option3
            texts={["Activity 2", "567.80", "2,98,6792"]}
            isChecked={isChecked || selectAll}
          />
          <Option3
            texts={["Activity 3", "567.80", "2,98,6792"]}
            isChecked={isChecked || selectAll}
          />
          <Option3
            texts={["Activity 4", "567.80", "2,98,6792"]}
            isChecked={isChecked || selectAll}
          />
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Option2;
