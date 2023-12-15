import { Outlet } from "react-router-dom";
import "./styles.scss";
import AdminSideNav from "../../../components/AdminSideNav/AdminSideNav.jsx";
import AdminHeader from "../../../components/AdminHeader/AdminHeader.jsx";

const AdminHome = () => {
  return (
    <>
      {/* <AdminSideNav /> */}
      <AdminHeader />
      <div className="left-navbar_container">
        <AdminSideNav />
      </div>
      <main className="admin-main-container_block">
        <Outlet />
      </main>
    </>
  );
};

export default AdminHome;
