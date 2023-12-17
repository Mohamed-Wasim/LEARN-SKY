const express = require("express");
const cCrsType = require("../controllers/cCrsType");
const routes = express();
// courses requests
routes.post("/fetch", cCrsType.fetchCourseTypeEx);
routes.post("/save", cCrsType.saveCourseType);
routes.post("/update", cCrsType.updateCrsType);

module.exports = routes;
