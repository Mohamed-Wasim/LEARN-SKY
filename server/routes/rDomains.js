const express = require("express");
const cDomains = require("../controllers/cDomains");
const routes = express();
// Domains requests
routes.post("/search-languages", cDomains.fetchSearchLanguagesEx);

module.exports = routes;
