import React, { useState } from "react";
import "./Option3.css";
import Option4 from "../Option4/Option4";
const Option3 = ({ texts, isChecked }) => {
  const [opened, setOpened] = useState(false);
  const [isChosen, setIsChosen] = useState(false);
  function openOptions() {
    setOpened(!opened);
  }
  return (
    <>
      <div className="option3-cont">
        {texts.map((ele, indx) => {
          return indx == 0 ? (
            <div key={indx}>
              <div className="links">
                <div className="inside_link"></div>
              </div>
              <input
                type="checkbox"
                checked={isChecked || isChosen}
                onClick={() => setIsChosen(!isChosen)}
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
        <span onClick={openOptions} className="open_btn">
          {opened == true ? (
            <span className="material-icons">expand_less</span>
          ) : (
            <span className="material-icons">expand_more</span>
          )}
        </span>
      </div>
      {opened == true ? (
        <>
          <Option4
            texts={["Work Item 1", "", "2,98,6792"]}
            isChosen={isChosen || isChecked}
          />
          <Option4
            texts={["Work Item 2", "", "2,98,6792"]}
            isChosen={isChosen || isChecked}
          />
          <Option4
            texts={["Work Item 3", "", "2,98,6792"]}
            isChosen={isChosen || isChecked}
          />
          <Option4
            texts={["Work Item 4", "", "2,98,6792"]}
            isChosen={isChosen || isChecked}
          />
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default Option3;
