import React from "react";
import { Routes, Route } from "react-router-dom";
import StudentRegister from "../pages/Student/StudentRegister/StudentRegister";
import StudentLogIn from "../../src/pages/Student/StudentLogin/StudentLogin";
const AuthRoutes = () => {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<StudentRegister />} />
        <Route path="/register" element={<StudentRegister />} />
        <Route path="/login" element={<StudentLogIn />} />
        {/* <Route path="/" element={<AuthPage ele={"login"} />} />
        <Route path="/login" element={<AuthPage ele={"login"} />} />
        <Route path="/register" element={<AuthPage ele={"register"} />} /> */}
        {/* <Route
          path="/forgot-password"
          element={<AuthPage ele={"forgotpwd"} />}
        /> */}
      </Route>
    </Routes>
  );
};
export default AuthRoutes;
