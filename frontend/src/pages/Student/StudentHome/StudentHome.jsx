import { Outlet } from "react-router-dom";
import "./styles.scss";
import NavbarHeader from "../../../components/NavbarHeader/NavbarHeader";

const StudentHome = () => {
  return (
    <>
      <NavbarHeader />
      <main className="main-container_block">
        <Outlet />
      </main>
    </>
  );
};

export default StudentHome;
