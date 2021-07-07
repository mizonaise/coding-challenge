import "./leftSide.css";
import { useState, useContext } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { GamesContext } from "../../../../commons/state/Context";
import { IoMdArrowUp, IoMdArrowDown, IoMdArrowDropdown } from "react-icons/io";
import { filtersClear, loadOrderASC, loadQuery, loadScore } from "../../state/filtersAction";

function LeftSide() {
  const dispatch = useDispatch()
  const { 
    query, 
    score,
    order_asc,
   } = useSelector((state) => state.filtersReducer)

  const {
    filters,
    setFilters,
    selected,
    setSelected,
    setCurrentPage,
  } = useContext(GamesContext);

  const [showDrop, setShowDrop] = useState(false);

  const onClickDropdown = (value) => {
    setSelected(value);
    setFilters({
      isName: (value === "Name"),
      isDate: (value === "Release Date"),
      isScore: (value === "Score"),
    });
    setShowDrop(!showDrop);
    setCurrentPage(1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(filtersClear())
    setSelected("Release Date");
    setFilters({
      isDate: true,
      isScore: false,
      isName: false,
    });
  };

  return (
    <div className="filter">
      <h4 className="form-title">Filter Results</h4>
      <form className="filter-form" onSubmit={handleSubmit}>
        <label>{"Name (contains)"}</label>
        <input
          type="text"
          value={query}
          placeholder="Text string"
          onChange={(e) => {
            setCurrentPage(1);
            dispatch(loadQuery(e.target.value))
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
                  dispatch(loadScore(e.target.value))
                }}
              />
            </div>
          </div>
          <div className="order-input">
            <label>{"Order By"}</label>
            <div className="select-field">
              <div className="arrow-icon" onClick={() => dispatch(loadOrderASC(!order_asc))}>
                {order_asc ? <IoMdArrowUp /> : <IoMdArrowDown />}
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
                  <div
                    onClick={() => onClickDropdown("Release Date")}
                    className={`${filters.isDate ? "not-visible" : "visible"}`}
                  >
                    {"Release Date"}
                  </div>
                  <div
                    onClick={() => onClickDropdown("Score")}
                    className={`${filters.isScore ? "not-visible" : "visible"}`}
                  >
                    {"Score"}
                  </div>
                  <div
                    onClick={() => onClickDropdown("Name")}
                    className={`${filters.isName ? "not-visible" : "visible"}`}
                  >
                    {"Name"}
                  </div>
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

export default LeftSide;
