import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";
const AdminSideNav = () => {
  return (
    <div className="sidebar">
      <h2>Dashboard</h2>
      <ul>
        <li>
          <Link to="/dashboard">Home</Link>
        </li>
        <li>
          <Link to="/dashboard/users">Users</Link>
        </li>
        <li>
          <Link to="/dashboard/products">Products</Link>
        </li>
        {/* Add more links as needed */}
      </ul>
    </div>
  );
};

export default AdminSideNav;
