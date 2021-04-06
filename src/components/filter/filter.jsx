import "./filter.css";
import { useState, useContext } from "react";
import { GamesContext } from "../../context/context";
import { IoMdArrowUp, IoMdArrowDown, IoMdArrowDropdown } from "react-icons/io";

function Filter() {
  const {
    name,
    setName,
    score,
    setScore,
    isAsc,
    setIsAsc,
    filters,
    setFilters,
    selected,
    setSelected,
    setCurrentPage,
  } = useContext(GamesContext);

  const [showDrop, setShowDrop] = useState(false);

  const handleChange = (e) => {
    var { name, value } = e.target;
    setSelected(value);

    setFilters({
      isName: false,
      isDate: false,
      isScore: false,
      [name]: !filters.name,
    });
    setShowDrop(!showDrop);
    setCurrentPage(1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    setScore("");
    setSelected("Release Date");
    setFilters({
      isDate: true,
      isScore: false,
      isName: false,
    });
    setIsAsc(true);
  };

  return (
    <div className="filter">
      <h4 className="form-title">Filter Results</h4>
      <form className="filter-form" onSubmit={handleSubmit}>
        <label>{"Name (contains)"}</label>
        <input
          type="text"
          value={name}
          placeholder="Text string"
          onChange={(e) => {
            setCurrentPage(1);
            setName(e.target.value);
          }}
        />

        <div className="form-bottom">
          <div className="score-input">
            <div className="score-input">
              <label>{"Minimum Score"}</label>
              <input
                min="1"
                max="10"
                type="number"
                value={score}
                placeholder="1 - 10"
                onChange={(e) => {
                  setCurrentPage(1);
                  setScore(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="order-input">
            <label>{"Order By"}</label>
            <div className="select-field">
              <div className="arrow-icon" onClick={() => setIsAsc(!isAsc)}>
                {isAsc ? <IoMdArrowUp /> : <IoMdArrowDown />}
              </div>
              <div className="select">
                <div
                  className="selected"
                  onClick={() => setShowDrop(!showDrop)}
                >
                  {selected}{" "}
                  <span className="dropdown__icon">
                    <IoMdArrowDropdown />
                  </span>
                </div>
                <div
                  className={`dropdown ${showDrop ? "visible" : "not-visible"}`}
                >
                  <input
                    name="isDate"
                    value="Release Date"
                    onClick={handleChange}
                    className={`${filters.isDate ? "not-visible" : "visible"}`}
                  />
                  <input
                    value="Score"
                    name="isScore"
                    onClick={handleChange}
                    className={`${filters.isScore ? "not-visible" : "visible"}`}
                  />
                  <input
                    value="Name"
                    name="isName"
                    onClick={handleChange}
                    className={`${filters.isName ? "not-visible" : "visible"}`}
                  />
                </div>
              </div>
            </div>
          </div>
          <button className="btn-clear" type="submit" value="Clear">
            {"Clear"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Filter;
