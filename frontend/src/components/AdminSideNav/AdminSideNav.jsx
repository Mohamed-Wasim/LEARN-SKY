import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";
const AdminSideNav = () => {
  return (
    <div className="sidebar">
      <div className="admin_logo"></div>
      <ul>
        <li>
          <Link to="/admin/course">Courses</Link>
        </li>
        <li>
          <Link to="/admin/users">Users</Link>
        </li>
        <li>
          <Link to="/admin/products">Products</Link>
        </li>
        {/* Add more links as needed */}
      </ul>
    </div>
  );
};

export default AdminSideNav;
