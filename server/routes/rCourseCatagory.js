const express = require("express");
const cCrsCatagory = require("../controllers/cCrsCatagory");
const routes = express();
// courses requests
routes.post("/fetch", cCrsCatagory.fetchCourseCatagoryEx);
routes.post("/save", cCrsCatagory.saveCourseCatagory);
routes.post("/update", cCrsCatagory.updateCrsCatagory);

module.exports = routes;
