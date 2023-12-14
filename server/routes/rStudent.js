const express = require("express");
const cStudent = require("../controllers/cStudent");
const cCourse = require("../controllers/cCourse");
console.log("cStudent", cStudent);
const routes = express();
/* Student Api request handelers*/
routes.post("/register", cStudent.createStudent);
routes.post("/login", cStudent.logInStudent);
routes.get("/fetch-courses", cCourse.fetchCoursesEx);
routes.get("/fetch-my-courses", cStudent.fetchStuCoursesEx);
routes.post("/add-course-to-cart", cStudent.addCourseToCart);

module.exports = routes;
