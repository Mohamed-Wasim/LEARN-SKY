import React from "react";
import { Routes, Route } from "react-router-dom";

const Courses = React.lazy(() =>
  import("../pages/Student/Courses/Courses.jsx")
);

const AdminRoutes = () => {
  return (
    <Routes>
      {/* <Route path="*" element={<InstitutePage />} /> */}
      <Route path="/courses" element={<Courses />} />
      {/* <Route path="/courses" element={<StudentLogin />} /> */}
    </Routes>
  );
};
export default AdminRoutes;
