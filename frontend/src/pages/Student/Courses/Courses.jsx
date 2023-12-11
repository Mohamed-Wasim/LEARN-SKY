import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./styles.scss";
import { fetchCourses } from "../../../services/courseService";
import { addCourseToCart } from "../../../services/studentService";
import { LskyToaster } from "../../../components/LskyToaster";
import CourseCardComponent from "../../../components/CourseCardComponent/CourseCardComponent";
import useSharedService from "../../../hooks/useSharedService";
import LiveCourses from "./LiveCourses";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

const Courses = () => {
  const { t } = useTranslation(); //translator
  const [oCorses, setcourses] = useState([]); // corses group by course catagory
  const [tab, setTab] = useState("courses"); //current tab
  const loginStuId = useSharedService("getStuDetailes", null, "_id"); //student id

  /* To get all courses */
  const getCourses = async () => {
    try {
      const oCouseRes = await fetchCourses();
      setcourses(oCouseRes);
    } catch {
      LskyToaster(
        "error",
        t("UNKNOWN_ERROR_PLEASE_CONTACT_YOUR_ADMINISTRATOR"),
        3000
      );
    }
  };

  /* To add courses to cart */
  const addToCart = async (crsId) => {
    const oReqObj = {
      stuId: loginStuId,
      coursId: crsId
    };
    try {
      await addCourseToCart(oReqObj);
      getCourses();
    } catch {
      LskyToaster(
        "error",
        t("UNKNOWN_ERROR_PLEASE_CONTACT_YOUR_ADMINISTRATOR"),
        3000
      );
    }
  };

  useEffect(() => {
    getCourses();
  }, []);

  return (
    <>
      <Tabs
        id="courses"
        activeKey={tab}
        onSelect={(tab) => setTab(tab)}
        className="mb-20 ms-4"
        variant="underline"
      >
        <Tab eventKey="courses" title={t("COURSES_LIBRARY")}>
          <div className="row container mt-5">
            {oCorses?.length &&
              oCorses.map((crs, index) => (
                <div
                  key={index}
                  className="col-md-4 mb-4 d-flex justify-content-center align-items-center"
                >
                  <CourseCardComponent course={crs} addToCart={addToCart} />
                </div>
              ))}
          </div>
        </Tab>
        <Tab eventKey="livecourses" title={t("LIVE_CLASSES")}>
          <LiveCourses />
        </Tab>
      </Tabs>
    </>
  );
};

export default Courses;
