import React from "react";
import { Routes, Route } from "react-router-dom";

const AdminCourseForm = React.lazy(() =>
  import("../pages/Admin/AdminCourse/AdminCourseForm")
);
const CourseList = React.lazy(() =>
  import("../pages/Admin/AdminCourse/CourseList")
);

const AdminRoutes = () => {
  return (
    <Routes>
      {/* <Route path="*" element={<InstitutePage />} /> */}
      <Route path="/create-course" element={<AdminCourseForm />} />
      <Route path="/courses" element={<CourseList />} />
    </Routes>
  );
};
export default AdminRoutes;
