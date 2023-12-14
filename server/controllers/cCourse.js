const express = require("express");
const mCourse = require("../models/mCourse");
const _ = require("underscore");

exports.saveCourse = function (req, res) {
  console.log("is coming");
  res.status(201).json({ code: "SAVED_SUCCESS" });
  return;
  const oInputData = req.body;
  const newCourse = new mCourse({
    code: oInputData.code,
    name: oInputData.name,
    description: oInputData.description,
    actulFee: oInputData.actulFee,
    discFee: oInputData.discFee,
    duration: oInputData.duration,
    regCount: oInputData.regCount,
    offers: oInputData.offers
  });
  newCourse
    .save()
    .then((savedCourse) => {
      console.log("Course saved successfully");
      res.status(201).json({ code: "SAVED_SUCCESS" });
    })
    .catch((err) => {
      console.error("Error saving the course:", err);
      res.status(500).json({ error: "Unknown Error saving the course" });
    });
};

exports.updateCourse = function (req, res) {
  const oUpdtData = {
    code: oInputData.code,
    name: oInputData.name,
    description: oInputData.description,
    actulFee: oInputData.actulFee,
    discFee: oInputData.discFee,
    duration: oInputData.duration,
    regCount: oInputData.regCount,
    offers: oInputData.offers
  };
  mCourse.updateOne({ _id: req.body._id }, oUpdtData, (err, result) => {
    if (err) {
      return res.status(500).json({ error: "Error updating the course" });
    } else {
      res.json({ message: "UPDT_SUCCESS" });
    }
  });
};

/**
 * Fetch courses clint request function
 * @response {Response coourses} res
 */
exports.fetchCoursesEx = function (req, res) {
  let docs = [
    {
      _id: "65374071dc9a3fe92adca57f",
      name: "Java",
      desc: "Java is a widely used programming language",
      crsType: "FIX",
      crsCat: "Software Development",
      actulFee: 12000,
      discFee: 10000,
      duration: 8,
      learnCnt: 300,
      offers: "Spring Sale",
      language: ["English", "Spanish"],
      crsRtngs: 4.2,
      crsPrfleImg:
        "https://images.unsplash.com/photo-1462536943532-57a629f6cc60?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      _id: "65374071dc9a3fe",
      name: "Machine Learning",
      desc: "Machine Learning for beginners to experts",
      crsType: "FLX",
      crsCat: "Data Science",
      actulFee: 15000,
      discFee: 12000,
      duration: 10,
      learnCnt: 400,
      offers: "Summer Special",
      language: ["English"],
      crsRtngs: 4.8,
      crsPrfleImg:
        "https://images.unsplash.com/photo-1462536943532-57a629f6cc60?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      _id: "653",
      name: "Node.js",
      desc: "Server-side JavaScript with Node.js",
      crsType: "FIX",
      crsCat: "Web development",
      actulFee: 11000,
      discFee: 9000,
      duration: 7,
      learnCnt: 250,
      offers: "Back to School",
      language: ["English", "French"],
      crsRtngs: 4.0,
      crsPrfleImg:
        "https://images.unsplash.com/photo-1462536943532-57a629f6cc60?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      _id: "6537",
      name: "Angular",
      desc: "Building dynamic web applications with Angular",
      crsType: "FLX",
      crsCat: "Web development",
      actulFee: 13000,
      discFee: 11000,
      duration: 9,
      learnCnt: 350,
      offers: "Autumn Discount",
      language: ["English", "German"],
      crsRtngs: 4.3,
      crsPrfleImg:
        "https://images.unsplash.com/photo-1462536943532-57a629f6cc60?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      _id: "99999999999999",
      name: "Python for Data Science",
      desc: "Harness the power of Python for data analysis",
      crsType: "FLX",
      crsCat: "Data Science",
      actulFee: 14000,
      discFee: 12000,
      duration: 8,
      learnCnt: 320,
      offers: "Data Fest",
      language: ["English", "Spanish"],
      crsRtngs: 4.6,
      crsPrfleImg:
        "https://images.unsplash.com/photo-1462536943532-57a629f6cc60?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      _id: "888888888888888888888",
      name: "iOS App Development",
      desc: "Building mobile apps for the Apple ecosystem",
      crsType: "FIX",
      crsCat: "Mobile App development",
      actulFee: 16000,
      discFee: 14000,
      duration: 10,
      learnCnt: 380,
      offers: "iOS Launch",
      language: ["English"],
      crsRtngs: 4.1,
      crsPrfleImg:
        "https://images.unsplash.com/photo-1462536943532-57a629f6cc60?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      _id: "65374071dc9a3fe92adca57f",
      name: "Blockchain Basics",
      desc: "Understanding the fundamentals of blockchain technology",
      crsType: "FIX",
      crsCat: "Technology",
      actulFee: 11000,
      discFee: 9000,
      duration: 6,
      learnCnt: 200,
      offers: "Crypto Craze",
      language: ["English", "Chinese"],
      crsRtngs: 4.0,
      crsPrfleImg:
        "https://images.unsplash.com/photo-1462536943532-57a629f6cc60?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      _id: "65374071dc9a3fe92adca57f",
      name: "Swift Programming",
      desc: "Developing iOS apps with Swift programming language",
      crsType: "FLX",
      crsCat: "Mobile App development",
      actulFee: 15000,
      discFee: 13000,
      duration: 9,
      learnCnt: 350,
      offers: "Swift Launch",
      language: ["English"],
      crsRtngs: 4.4,
      crsPrfleImg:
        "https://images.unsplash.com/photo-1462536943532-57a629f6cc60?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      _id: "65374071dc9a3fe92adca57f",
      name: "Cybersecurity Fundamentals",
      desc: "Essential principles for securing digital systems",
      crsType: "FIX",
      crsCat: "Cybersecurity",
      actulFee: 12000,
      discFee: 10000,
      duration: 7,
      learnCnt: 280,
      offers: "Security Special",
      language: ["English", "Spanish"],
      crsRtngs: 4.5,
      crsPrfleImg:
        "https://images.unsplash.com/photo-1462536943532-57a629f6cc60?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      _id: "65374071dc9a3fe92adca57f",
      name: "Vue.js",
      desc: "Building interactive user interfaces with Vue.js",
      crsType: "FLX",
      crsCat: "Web development",
      actulFee: 13000,
      discFee: 11000,
      duration: 8,
      learnCnt: 300,
      offers: "Vue Voyage",
      language: ["English", "French"],
      crsRtngs: 4.2,
      crsPrfleImg:
        "https://images.unsplash.com/photo-1462536943532-57a629f6cc60?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      _id: "65374071dc9a3fe92adca57f",
      name: "Artificial Intelligence",
      desc: "Exploring the realms of artificial intelligence",
      crsType: "FIX",
      crsCat: "Technology",
      actulFee: 14000,
      discFee: 12000,
      duration: 9,
      learnCnt: 320,
      offers: "AI Adventure",
      language: ["English", "German"],
      crsRtngs: 4.7,
      crsPrfleImg:
        "https://images.unsplash.com/photo-1462536943532-57a629f6cc60?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      _id: "65374071dc9a3fe92adca57f",
      name: "Data Visualization with D3.js",
      desc: "Creating compelling visualizations using D3.js",
      crsType: "FLX",
      crsCat: "Data Science",
      actulFee: 11000,
      discFee: 9000,
      duration: 6,
      learnCnt: 250,
      offers: "Visualize It",
      language: ["English", "Spanish"],
      crsRtngs: 4.3,
      crsPrfleImg:
        "https://images.unsplash.com/photo-1462536943532-57a629f6cc60?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      _id: "65374071dc9a3fe92adca57f",
      name: "DevOps Essentials",
      desc: "Integrating development and operations for efficient workflows",
      crsType: "FIX",
      crsCat: "DevOps",
      actulFee: 12000,
      discFee: 10000,
      duration: 7,
      learnCnt: 280,
      offers: "DevOps Dive",
      language: ["English", "Chinese"],
      crsRtngs: 4.0,
      crsPrfleImg:
        "https://images.unsplash.com/photo-1462536943532-57a629f6cc60?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      _id: "65374071dc9a3fe92adca57f",
      name: "Python Django Framework",
      desc: "Building web applications with Python and Django",
      crsType: "FLX",
      crsCat: "Web development",
      actulFee: 14000,
      discFee: 12000,
      duration: 8,
      learnCnt: 300,
      offers: "Django Delight",
      language: ["English", "Spanish"],
      crsRtngs: 4.6,
      crsPrfleImg:
        "https://images.unsplash.com/photo-1462536943532-57a629f6cc60?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      _id: "65374071dc9a3fe92adca57f",
      name: "Rust Programming",
      desc: "A systems programming language focused on safety and performance",
      crsType: "FIX",
      crsCat: "Software Development",
      actulFee: 13000,
      discFee: 11000,
      duration: 9,
      learnCnt: 320,
      offers: "Rust Revolution",
      language: ["English", "German"],
      crsRtngs: 4.2,
      crsPrfleImg:
        "https://images.unsplash.com/photo-1462536943532-57a629f6cc60?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      _id: "65374071dc9a3fe92adca57f",
      name: "Cloud Computing Fundamentals",
      desc: "Understanding the basics of cloud computing",
      crsType: "FLX",
      crsCat: "Technology",
      actulFee: 12000,
      discFee: 10000,
      duration: 6,
      learnCnt: 250,
      offers: "Cloud Clarity",
      language: ["English", "French"],
      crsRtngs: 4.1,
      crsPrfleImg:
        "https://images.unsplash.com/photo-1462536943532-57a629f6cc60?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      _id: "65374071dc9a3fe92adca57f",
      name: "UI/UX Design Principles",
      desc: "Creating user-friendly and visually appealing designs",
      crsType: "FIX",
      crsCat: "Design",
      actulFee: 11000,
      discFee: 9000,
      duration: 7,
      learnCnt: 280,
      offers: "Design Delight",
      language: ["English", "Spanish"],
      crsRtngs: 4.3,
      crsPrfleImg:
        "https://images.unsplash.com/photo-1462536943532-57a629f6cc60?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      _id: "65374071dc9a3fe92adca57f",
      name: "Python Flask Framework",
      desc: "Building lightweight web applications with Python and Flask",
      crsType: "FLX",
      crsCat: "Web development",
      actulFee: 13000,
      discFee: 11000,
      duration: 8,
      learnCnt: 300,
      offers: "Flask Fiesta",
      language: ["English", "Chinese"],
      crsRtngs: 4.5,
      crsPrfleImg:
        "https://images.unsplash.com/photo-1462536943532-57a629f6cc60?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      _id: "65374071dc9a3fe92adca57f",
      name: "C# Programming",
      desc: "Developing applications with C# programming language",
      crsType: "FIX",
      crsCat: "Software Development",
      actulFee: 14000,
      discFee: 12000,
      duration: 9,
      learnCnt: 320,
      offers: "C# Celebration",
      language: ["English", "Spanish"],
      crsRtngs: 4.4,
      crsPrfleImg:
        "https://images.unsplash.com/photo-1462536943532-57a629f6cc60?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      _id: "65374071dc9a3fe92adca57f",
      name: "Mobile Game Development with Unity",
      desc: "Creating games for mobile platforms using Unity",
      crsType: "FLX",
      crsCat: "Game Development",
      actulFee: 15000,
      discFee: 13000,
      duration: 10,
      learnCnt: 350,
      offers: "Game On",
      language: ["English"],
      crsRtngs: 4.6,
      crsPrfleImg:
        "https://images.unsplash.com/photo-1462536943532-57a629f6cc60?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      _id: "65374071dc9a3fe92adca57f",
      name: "Python",
      desc: "Python is advanced language",
      crsType: "FIX",
      crsCat: "Web development",
      actulFee: 10000,
      discFee: 8000,
      duration: 6,
      learnCnt: 234,
      offers: "Diwali offer",
      language: ["English", "Hindi"],
      crsRtngs: 4.1,
      crsPrfleImg:
        "https://images.unsplash.com/photo-1462536943532-57a629f6cc60?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      _id: "65374071dc9a3fe92adca57f",
      name: "React Native",
      desc: "React Native is advanced mobile app development language",
      crsType: "FLX",
      crsCat: "Cybersecurity",
      actulFee: 10000,
      discFee: 8000,
      duration: 6,
      learnCnt: 234,
      offers: "critmas offer",
      language: ["English", "Hindi", "Tamil"],
      crsRtngs: 3.9,
      crsPrfleImg:
        "https://images.unsplash.com/photo-1462536943532-57a629f6cc60?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  // const oRes = _.groupBy(docs, "crsCat");
  res.status(200).json({ oCourses: docs });

  // exports.fetchCoursesIn(req.body, (err, docs) => {
  //   if (err) {
  //     res.status(500).json({ error: "Error finding courses" }, null);
  //   } else if (docs && docs.length) {
  //     res.status(200).json(null, { courses: docs });
  //   } else {
  //     res.status(200).json({ code: "NO_COURSE" }, null);
  //   }
  // });
};

/**
 * Fetch courses Internal function
 * @param {any ids} req
 * @response {Response coourses} res
 */
exports.fetchCoursesIn = async function (oReq, callback) {
  const oQuery = {
    $and: []
  };
  oQuery.$and.push({ StFl: "A" });
  if (oReq?.crsType) {
    oQuery.$and.push({ crsType: crsType });
  }

  if (oReq?.aCrsIds?.length > 0) {
    oQuery.$and.push({ _id: { $in: aCrsIds } });
  }

  let oProj = {};
  if (oReq?.oProj) {
    oProj = oReq.oProj;
  }
  try {
    const data = await mCourse.find(oQuery, oProj).lean();
    if (data?.length) {
      callback({ status: "200", data: data });
    } else {
      callback({ status: "200", code: "NO_DATA_FOUND" });
    }
  } catch (error) {
    callback({ status: "500", err });
  }
};
