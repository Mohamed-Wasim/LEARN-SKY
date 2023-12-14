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
      <div className="admin-flex admin_header_container">
        <div>
          <h1>Logo</h1>
        </div>
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
            <li></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default AdminHeader;
