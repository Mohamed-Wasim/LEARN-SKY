const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
// const dotenv = require('dotenv');
// Load environment variables from .env
// dotenv.config();
const app = express();
const coursRoutes = require("./routes/rCours");
const instutRoutes = require("./routes/rInstitute");
const studentRoutes = require("./routes/rStudent");
const domainRoutes = require("./routes/rDomains");
const rCourseCatagory = require("./routes/rCourseCatagory");
const rCourseType = require("./routes/rCourseType");
// const MONGODB_URI = process.env.MONGDB_URI; // Correct the variable name
const PORT = 3000;
const dbURI = "mongodb://127.0.0.1:27017/instuteDB";

/* Middlewares */

// Use cors middleware
app.use(
  cors({
    origin: "http://localhost:3001",
    credentials: true // Enable credentials (cookies, authorization headers, etc.)
  })
);
app.use(express.json());

/* API routes */
app.use("/student", studentRoutes);
app.use("/course", coursRoutes);
app.use("/institute", instutRoutes);
app.use("/domain", domainRoutes);
app.use("/coursecatagoary", rCourseCatagory);
app.use("/coursetype", rCourseType);

// Application connection

/* Database connection functionality start */
mongoose
  .connect(dbURI)
  .then(() => {
    console.log(`MongoDB connected successfully ${dbURI}`);
    app.listen(PORT, () => {
      console.log(`Server connected successfully on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(`Error occurred: ${error}`);
  });
