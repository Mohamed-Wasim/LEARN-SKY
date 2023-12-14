import React from "react";
import { Routes, Route } from "react-router-dom";

const Courses = React.lazy(() =>
  import("../pages/Student/Courses/Courses.jsx")
);

const AddCourses = React.lazy(() =>
  import("../pages/Admin/AdminCourse/AdminCourseForm.jsx")
);

const StudentRoutes = () => {
  return (
    <Routes>
      {/* <Route path="*" element={<InstitutePage />} /> */}
      <Route path="/courses" element={<Courses />} />
      <Route path="/Practices" element={<AddCourses />} />
    </Routes>
  );
};
export default StudentRoutes;
