import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faBell,
  faCartShopping
} from "@fortawesome/free-solid-svg-icons";
import { NavLink, useNavigate } from "react-router-dom";
import useSharedService from "../../hooks/useSharedService";
import "./styles.scss";

const NavebarHeader = () => {
  const navigate = useNavigate();
  const loginStuDetatiles = useSharedService("getStuDetailes"); //student detailes
  useEffect(() => {
    // navigate("/student/courses");
  }, []);
  return (
    <>
      <div className="header_container border-bottom ">
        <div className="logo">
          <h1>Logo</h1>
        </div>
        <div className="navs_container">
          <ul className="navs">
            <li className="ms-5">
              <NavLink
                to="/student/courses"
                style={({ isActive }) => ({
                  color: isActive ? "#825CFE" : "black"
                })}
              >
                Courses
              </NavLink>
            </li>
            <li className="ms-5">
              <NavLink
                to="/student/MyCourses"
                style={({ isActive }) => ({
                  color: isActive ? "#825CFE" : "black"
                })}
              >
                MyCourses
              </NavLink>
            </li>
            <li className="ms-5">
              <NavLink
                to="/student/Practices"
                style={({ isActive }) => ({
                  color: isActive ? "#825CFE" : "black"
                })}
              >
                Practices
              </NavLink>
            </li>
            <li className="ms-5">
              <NavLink
                to="/student/Test"
                style={({ isActive }) => ({
                  color: isActive ? "#825CFE" : "black"
                })}
              >
                Test
              </NavLink>
            </li>
            <li className="ms-5">
              <NavLink
                to="/student/Jobs"
                style={({ isActive }) => ({
                  color: isActive ? "#825CFE" : "black"
                })}
              >
                Jobs
              </NavLink>
            </li>
            <li className="ms-5">
              <NavLink
                to="/student/OurSolution"
                style={({ isActive }) => ({
                  color: isActive ? "#825CFE" : "black"
                })}
              >
                Our solutions
              </NavLink>
            </li>
          </ul>
        </div>
        <div
          style={{
            width: "2px",
            height: "30%",
            backgroundColor: "rgba(0, 0, 0, 0.20)"
          }}
        ></div>

        <div className="icons_container">
          <ul className="navs">
            <li>
              <NavLink
                to="messages"
                style={({ isActive }) => ({
                  color: isActive ? "#825CFE" : "black"
                })}
              >
                <FontAwesomeIcon icon={faEnvelope} />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="Notification"
                style={({ isActive }) => ({
                  color: isActive ? "#825CFE" : "black"
                })}
              >
                <FontAwesomeIcon icon={faBell} />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="AddToCard"
                style={({ isActive }) => ({
                  color: isActive ? "#825CFE" : "black"
                })}
              >
                <FontAwesomeIcon icon={faCartShopping} />
              </NavLink>
            </li>
            <li>
              <div className="prfName">
                <img src={loginStuDetatiles?.PhotoImgUrl} alt="" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavebarHeader;
