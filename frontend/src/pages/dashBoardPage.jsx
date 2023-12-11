import { Outlet } from "react-router-dom";
import Header from "../components/headerComponent/header";
import './dashBoardPage.css';

const DashBoardPage = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
    </div>
  )
}

export default DashBoardPage;