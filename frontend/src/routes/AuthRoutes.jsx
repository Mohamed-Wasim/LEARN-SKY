import React from "react";
import { Routes, Route } from "react-router-dom";
import StudentRegister from "../pages/Student/StudentRegister/StudentRegister";
import StudentLogIn from "../../src/pages/Student/StudentLogin/StudentLogin";
import SplashPage from "../pages/SplashPage/SplashPage";
import Courses from "../pages/Student/Courses/Courses";
const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SplashPage />} />
      <Route path="/register" element={<StudentRegister />} />
      <Route path="/login" element={<StudentLogIn />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="*" element={<SplashPage />} />
    </Routes>
  );
};
export default AuthRoutes;
