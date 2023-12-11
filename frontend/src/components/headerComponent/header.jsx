import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faEnvelope,
  faBell,
  faCartShopping
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import UserComponent from "../UserComponent/UserComponent";

const Header = () => {
  return (
    <div className="flex header_container">
      <div>
        <h1>Logo</h1>
      </div>
      <ul className="flex">
        <li>
          <NavLink to="CourseLibrary">Coursers</NavLink>
        </li>
        <li>
          <NavLink to="/MyCourses">MyCourses</NavLink>
        </li>
        <li>
          <NavLink to="/Practices">Practices</NavLink>
        </li>
        <li>
          <NavLink to="/Test">Test</NavLink>
        </li>
        <li>
          <NavLink to="/Jobs">Jobs</NavLink>
        </li>
        <li>
          <NavLink to="/OurSolution">Our solutions</NavLink>
        </li>
      </ul>
      <div>
        <ul className="flex">
          <li>
            <FontAwesomeIcon icon={faHeart} />
          </li>
          <li>
            <FontAwesomeIcon icon={faEnvelope} />
          </li>
          <li>
            <FontAwesomeIcon icon={faBell} />
          </li>
          <li>
            <NavLink to="AddToCard">
              <FontAwesomeIcon icon={faCartShopping} />
            </NavLink>
          </li>
          <li>
            <UserComponent />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
