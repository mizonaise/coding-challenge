import "./filter.css";

function Filter() {
  return (
    <form>
      <h4 className="form-title">Filter Results</h4>

      <label>{"Name (contains)"}</label>
      <input />

      <div className="form-bottom">
        <div className="score-input">
          <label>{"Minimum Score"}</label>
          <input />
        </div>
        <div className="order-input">
          <label>{"Order By"}</label>
          <input />
        </div>
        <button className="btn-clear">{"Clear"}</button>
      </div>
    </form>
  );
}

export default Filter;
