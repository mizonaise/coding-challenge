import "./header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="App">
      <header>
        <nav className="nav-container">
          <NavLink to={"/"} exact className="nav-item">
            <h1 className={"background-text"}>video</h1>
            <span>video games</span>
          </NavLink>
          <NavLink to={"/contact"} exact className="nav-item">
            <h1 className={"background-text"}>contact</h1>
            <span>contact</span>
          </NavLink>
        </nav>
      </header>
    </div>
  );
};
export default Header;
