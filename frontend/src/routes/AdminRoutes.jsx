import React from "react";
import { Routes, Route } from "react-router-dom";

const AdminCourses = React.lazy(() =>
  import("../pages/Admin/AdminCourse/AdminCourseForm")
);

const AdminRoutes = () => {
  return (
    <Routes>
      {/* <Route path="*" element={<InstitutePage />} /> */}
      <Route path="/course" element={<AdminCourses />} />
      {/* <Route path="/courses" element={<StudentLogin />} /> */}
    </Routes>
  );
};
export default AdminRoutes;
