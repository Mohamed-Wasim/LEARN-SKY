const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  RegNo: { type: String }, //register number
  StuType: { type: String, enum: ["STU", "ORG"] }, //Syudent
  RegDt: { type: Date, default: Date.now }, //Registered date
  RefStuId: { type: String }, //student refered student id
  Branch: { type: String }, //branch id
  FNa: { type: String }, // First Name
  LNa: { type: String }, //Last name
  DOB: { type: Date }, //Date of birth
  Sex: { type: String }, //Gender
  Email: { type: String }, //Email adress
  Name: { type: String }, //Register name
  Mob: { type: String }, //mobile number
  loginId: { type: String }, //login id
  EmContNo: { type: String }, //emergency contact number
  HighQual: { type: String },
  Qual: [
    {
      Medium: { type: String }, // Medium of instructions
      Inst: { type: String }, // studied institution name
      InstAdL1: { type: String }, // Institution address
      InstPl: { type: String }, // Place of Institution
      InstCn: { type: String }, // Institution Country
      InstPIN: { type: String }, // PIN Code of the institution address
      CertfctNo: { type: String }, //Certificate number
      DateOfPass: { type: Date }, //date of passed out
      DOJ: { type: Date }, //DATE OF JOINING
      RegNo: { type: String }, // Register Number
      Univ: { type: String }, // University Name
      Percent: { type: String }, // percentage of total marks
      grade: { type: String }, //Grade
      cgpa: { type: String } //CGPA
    }
  ],
  BlodGp: { type: String }, //Blood group
  CrAt: { type: Date, default: Date.now }, //user created date
  MoAt: { type: Date, default: Date.now }, //Modified date
  CrBy: { type: String }, //user created By
  MdBy: { type: String }, //Modified by
  PhotoImgID: { type: String }, //photo Url
  StuSts: { type: String, enum: ["A", "IA", "FIRD"], default: "A" }, //A-currnetly active,IA-in active,FIRD-Fired student
  isIssueCert: { type: Boolean, default: false }, //issued certificate
  RegCourse: [
    {
      //regitered course
      crsId: { type: String }, // course id
      BranchId: { type: String }, // Branch id
      status: {
        type: String,
        enum: ["A", "CC", "DC", "PLCD"],
        default: "A"
      }, //A-active,CC-course completed,Dc-discontinued,PLCD-Job Placed
      isIssueCert: { type: Boolean, default: false }, //issued certificate
      CertfctNo: { type: String }, //Certificate number
      DOJ: { type: Date }, //Date of joining
      DOC: { type: Date }, //Date of course completion
      Percent: { type: String }, // percentage
      grade: { type: String }, //Grade
      ComplTopics: { type: Array }, //completed topics
      ComplExams: { type: Array }, //completed Exams
      BatchId: { type: String }, // Batch ID
      BatchName: { type: String }, // Batch Name
      isPaidFee: { type: Boolean }, //paided full course Fee
      TotalFee: { type: Number }, //Total Fee Amount
      PaidFee: { type: Number }, //paid Fee amount
      BalFee: { type: Number } //Balance Fee Amount
    }
  ],
  savedCourse: { type: Array },
  cartCourse: { type: Array },
  aplidJobs: [
    {
      JobId: { type: String }, // Job id
      aplidDt: { type: Date } //Applied date
    }
  ],
  savedJobs: { type: Array },
  FirdRson: { type: String } //Fired Reason
});
module.exports = mongoose.model("student", StudentSchema);
