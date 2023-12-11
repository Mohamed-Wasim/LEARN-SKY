import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./styles.scss";
import { fetchLiveCourses } from "../../../services/courseService";
import { LskyToaster } from "../../../components/LskyToaster";
import useSharedService from "../../../hooks/useSharedService";
import { addCourseToCart } from "../../../services/studentService";
import CourseCardComponent from "../../../components/CourseCardComponent/CourseCardComponent";

const LiveCourses = () => {
  const { t } = useTranslation(); //translator
  const [oCorses, setcourses] = useState([]); // corses group by course catagory
  const loginStuId = useSharedService("getStuDetailes", null, "_id"); //student id

  /* To get live courses */
  const getLiveCourses = async () => {
    try {
      const oCouseRes = await fetchLiveCourses();
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
      getLiveCourses();
    } catch {
      LskyToaster(
        "error",
        t("UNKNOWN_ERROR_PLEASE_CONTACT_YOUR_ADMINISTRATOR"),
        3000
      );
    }
  };

  useEffect(() => {
    getLiveCourses();
  }, []);

  return (
    <>
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
    </>
  );
};

export default LiveCourses;
