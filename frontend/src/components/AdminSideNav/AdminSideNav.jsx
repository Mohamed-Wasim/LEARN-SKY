import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LskyMatIcon from "../LskyMatIcon";
import logo from "../../assets/img/learnsky-logo2.png";
import "./styles.scss";
const AdminSideNav = () => {
  const { t } = useTranslation(); //translation
  const navigate = useNavigate();
  const [navData, setNavData] = useState([
    {
      mainNav: "student",
      desc: "Students",
      icon: "groups",
      subNavs: [
        { desc: "List", icon: "patient_list", path: "/admin/students" },
        { desc: "Add", icon: "person_add", path: "/admin/add-students" },
        {
          desc: "Completed students",
          icon: "how_to_reg",
          path: "/admin/add-students"
        }
      ]
    },
    {
      mainNav: "course",
      desc: "Courses",
      icon: "computer",
      subNavs: [
        { desc: "List", icon: "patient_list", path: "/admin/course" },
        { desc: "Add", icon: "person_add", path: "/admin/add-course" }
      ]
    },
    {
      mainNav: "job",
      desc: "Job",
      icon: "work",
      path: "/admin/jobs"
    },
    {
      mainNav: "batches",
      desc: "Batches",
      icon: "diversity_3",
      path: "/admin/batchs"
    }
  ]);
  const [mainNav, setMainNav] = useState("course");
  const [subNav, setSubNav] = useState("");
  const [isSubNavExpand, setSubNavExpand] = useState(false);
  return (
    <>
      <div className="sidebar">
        <div className="admin_logo">
          <img src={logo} alt="Learn Sky" />
        </div>
        <div className="sisenav_container">
          <ul>
            <li
              className="admin_nav_item main_nav"
              style={{
                background:
                  mainNav === "students" &&
                  isSubNavExpand &&
                  "linear-gradient(to right, #bab9bc, #b7b1c2)",
                color:
                  mainNav === "students" && isSubNavExpand ? "white" : "#514D58"
              }}
              onClick={() => {
                navigate("/admin/students");
                setMainNav("students");
                setSubNavExpand(!isSubNavExpand);
                setSubNav("");
              }}
            >
              <span className="admin_nav_item_icon">
                <LskyMatIcon name="groups" />
              </span>
              {t("STUDENTS")}
              {mainNav === "students" && isSubNavExpand ? (
                <LskyMatIcon name="expand_more" />
              ) : (
                <LskyMatIcon name="chevron_right" />
              )}
            </li>
            {mainNav === "students" && isSubNavExpand && (
              <>
                <li
                  className="admin_nav_item admin_subnav_item"
                  style={{
                    background:
                      subNav === "list" &&
                      "linear-gradient(to right, #C3A2FE, #9155FD)",
                    color: subNav === "list" ? "white" : "#514D58"
                  }}
                  onClick={() => {
                    navigate("/admin/students");
                    setSubNav("list");
                  }}
                >
                  <span className="admin_nav_item_icon">
                    <LskyMatIcon name="patient_list" />
                  </span>

                  {t("LIST")}
                </li>
                <li
                  className="admin_nav_item admin_subnav_item"
                  style={{
                    background:
                      subNav === "add" &&
                      "linear-gradient(to right, #C3A2FE, #9155FD)",
                    color: subNav === "add" ? "white" : "#514D58"
                  }}
                  onClick={() => {
                    navigate("/admin/add-students");
                    setSubNav("add");
                  }}
                >
                  <span className="admin_nav_item_icon">
                    <LskyMatIcon name="person_add" />
                  </span>
                  {t("ADD_STUDENT")}
                </li>
                <li
                  className="admin_nav_item admin_subnav_item"
                  style={{
                    background:
                      subNav === "completed" &&
                      "linear-gradient(to right, #C3A2FE, #9155FD)",
                    color: subNav === "completed" ? "white" : "#514D58"
                  }}
                  onClick={() => {
                    navigate("/admin/completetd-students");
                    setSubNav("completed");
                  }}
                >
                  <span className="admin_nav_item_icon">
                    <LskyMatIcon name="how_to_reg" />
                  </span>
                  {t("COMPLETED_STUDENT")}
                </li>
              </>
            )}
            <li
              className="admin_nav_item main_nav"
              style={{
                background:
                  mainNav === "course" &&
                  isSubNavExpand &&
                  "linear-gradient(to right, #bab9bc, #b7b1c2)",
                color:
                  mainNav === "course" && isSubNavExpand ? "white" : "#514D58"
              }}
              onClick={() => {
                // navigate("/admin/courses");
                setMainNav("course");
                setSubNavExpand(!isSubNavExpand);
                setSubNav("");
              }}
            >
              <span className="admin_nav_item_icon">
                <LskyMatIcon name="computer" />
              </span>
              {t("COURSES")}
              {mainNav === "course" && isSubNavExpand ? (
                <LskyMatIcon name="expand_more" />
              ) : (
                <LskyMatIcon name="chevron_right" />
              )}
            </li>
            {mainNav === "course" && isSubNavExpand && (
              <>
                <li
                  className="admin_nav_item admin_subnav_item"
                  style={{
                    background:
                      subNav === "list" &&
                      "linear-gradient(to right, #C3A2FE, #9155FD)",
                    color: subNav === "list" ? "white" : "#514D58"
                  }}
                  onClick={() => {
                    navigate("/admin/courses");
                    setSubNav("list");
                  }}
                >
                  <span className="admin_nav_item_icon">
                    <LskyMatIcon name="patient_list" />
                  </span>

                  {t("LIST")}
                </li>
                <li
                  className="admin_nav_item admin_subnav_item"
                  style={{
                    background:
                      subNav === "add" &&
                      "linear-gradient(to right, #C3A2FE, #9155FD)",
                    color: subNav === "add" ? "white" : "#514D58"
                  }}
                  onClick={() => {
                    navigate("/admin/students");
                    setSubNav("add");
                  }}
                >
                  <span className="admin_nav_item_icon">
                    <LskyMatIcon name="person_add" />
                  </span>
                  {t("ADD_STUDENT")}
                </li>
                <li
                  className="admin_nav_item admin_subnav_item"
                  style={{
                    background:
                      subNav === "completed" &&
                      "linear-gradient(to right, #C3A2FE, #9155FD)",
                    color: subNav === "completed" ? "white" : "#514D58"
                  }}
                  onClick={() => {
                    navigate("/admin/students");
                    setSubNav("completed");
                  }}
                >
                  <span className="admin_nav_item_icon">
                    <LskyMatIcon name="how_to_reg" />
                  </span>
                  {t("COMPLETED_STUDENT")}
                </li>
              </>
            )}
            <li
              className="admin_nav_item"
              style={{
                background:
                  mainNav === "jobs" &&
                  "linear-gradient(to right, #C3A2FE, #9155FD)",
                color: mainNav === "jobs" ? "white" : "#514D58"
              }}
              onClick={() => {
                navigate("/admin/jobs");
                setMainNav("jobs");
              }}
            >
              <span className="admin_nav_item_icon">
                <LskyMatIcon name="work" />
              </span>
              {t("JOBS")}
            </li>
            <li
              className="admin_nav_item"
              style={{
                background:
                  mainNav === "batchs" &&
                  "linear-gradient(to right, #C3A2FE, #9155FD)",
                color: mainNav === "batchs" ? "white" : "#514D58"
              }}
              onClick={() => {
                navigate("/admin/batchs");
                setMainNav("batchs");
              }}
            >
              <span className="admin_nav_item_icon">
                <LskyMatIcon name="diversity_3" />
              </span>
              {t("BATCHES")}
            </li>
            <li
              className="admin_nav_item"
              style={{
                background:
                  mainNav === "trainers" &&
                  "linear-gradient(to right, #C3A2FE, #9155FD)",
                color: mainNav === "trainers" ? "white" : "#514D58"
              }}
              onClick={() => {
                navigate("/admin/trainers");
                setMainNav("trainers");
              }}
            >
              <span className="admin_nav_item_icon">
                <LskyMatIcon name="communication" />
              </span>
              {t("TRAINERS")}
            </li>
            <li
              className="admin_nav_item"
              style={{
                background:
                  mainNav === "enquiries" &&
                  "linear-gradient(to right, #C3A2FE, #9155FD)",
                color: mainNav === "enquiries" ? "white" : "#514D58"
              }}
              onClick={() => {
                navigate("/admin/enquiries");
                setMainNav("enquiries");
              }}
            >
              <span className="admin_nav_item_icon">
                <LskyMatIcon name="live_help" />
              </span>
              {t("ENQUIRIES")}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default AdminSideNav;
