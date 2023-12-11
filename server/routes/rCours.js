const express = require("express");
const cCourse = require("../controllers/cCourse");
const routes = express();
// courses requests
routes.post("/save-courses", cCourse.saveCourse);
routes.post("/update-courses", cCourse.updateCourse);
routes.post("/fetch-courses", cCourse.fetchCoursesEx);

module.exports = routes;
