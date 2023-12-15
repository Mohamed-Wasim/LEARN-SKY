import "./styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faEnvelope,
  faBell,
  faCartShopping
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const AdminHeader = () => {
  return (
    <>
      <div className="admin_flex admin_header_container">
        <div></div>
        <div>
          <ul className="admin_flex admin_icon ">
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
            <li></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default AdminHeader;
