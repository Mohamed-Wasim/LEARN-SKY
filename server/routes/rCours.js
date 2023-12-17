const express = require("express");
const cCourse = require("../controllers/cCourse");
const cCrsCatagory = require("../controllers/cCrsCatagory");
const routes = express();
// courses requests
routes.post("/create", cCourse.createCourse);
routes.post("/update-courses", cCourse.updateCourse);
routes.get("/fetch", cCourse.fetchCourseEx);
routes.post("/catagory", cCrsCatagory.fetchCourseCatagoryEx);

module.exports = routes;
