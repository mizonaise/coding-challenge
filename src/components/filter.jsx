import "./filter.css";
import { useState } from "react";
import { IoMdArrowUp, IoMdArrowDown, IoMdArrowDropdown } from "react-icons/io";

function Filter() {
  const [isActive, setIsActive] = useState(true);

  const [isVisible, setIsVisible] = useState(true);
  return (
    <div className="filter">
      <h4 className="form-title">Filter Results</h4>
      <form className="filter-form">
        <label>{"Name (contains)"}</label>
        <input type="text" placeholder="Text string" />

        <div className="form-bottom">
          <div className="score-input">
            <label>{"Minimum Score"}</label>
            <input min="1" max="10" type="number" placeholder="1 - 10" />
          </div>
          <div className="order-input">
            <label>{"Order By"}</label>
            <div className="select-field">
              <div className="arrow__icon">
                <IoMdArrowUp className="visible" />
              </div>
              {/* <div className="arrow__icon" onClick={setIsActive(!isActive)}>
              <IoMdArrowUp
                className={`${isActive ? "visible" : "not-visible"}`}
              />
              <IoMdArrowDown
                className={`${isActive ? "not-visible" : "visible"}`}
              />
            </div> */}
              <div className="select">
                <div
                  className="selected"
                  onClick={() => setIsVisible(!isVisible)}
                >
                  {"Release Date"}{" "}
                  <span className="dropdown__icon">
                    <IoMdArrowDropdown />
                  </span>
                </div>
                <div
                  className={`dropdown ${
                    isVisible ? "visible" : "not-visible"
                  }`}
                >
                  {/* <input
                  name="isDate"
                  value="Release Date"
                  // onClick={handleChange}
                  // className={`${values.isDate ? "not-visible" : "visible"}`}
                /> */}
                  <input
                    name="isScore"
                    value="Score"
                    // onClick={handleChange}
                    // className={`${values.isScore ? "not-visible" : "visible"}`}
                  />
                  <input
                    name="isName"
                    value="Name"
                    // onClick={handleChange}
                    // className={`${values.isName ? "not-visible" : "visible"}`}
                  />
                </div>
              </div>
            </div>
          </div>
          <button className="btn-clear">{"Clear"}</button>
        </div>
      </form>
    </div>
  );
}

export default Filter;
