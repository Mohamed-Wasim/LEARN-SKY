import HttpService from "./base.service.js";
import { getApiEndUrl } from "../utils/apiServices.js";

// Service function for fetch courses
export const fetchCourses = async () => {
  const { oCourses, errors } = await HttpService.get(
    getApiEndUrl("STUDENT_FETCH_COURSES")
  );
  if (errors) {
    throw errors;
  }
  return oCourses;
};

// Service function for fetch Live courses
export const fetchLiveCourses = async () => {
  const { oCourses, errors } = await HttpService.get(
    getApiEndUrl("STUDENT_FETCH_COURSES"),
    { crsType: "FIX" }
  );
  if (errors) {
    throw errors;
  }
  return oCourses;
};

// Service function for create  course
export const createCourse = async (payload) => {
  const { oCourses, errors } = await HttpService.post(
    getApiEndUrl("CREATE_COURSE"),
    payload
  );
  if (errors) {
    throw errors;
  }
  return oCourses;
};

// Service function for fetch course list
export const getCourseList = async () => {
  console.log("is coming");
  const { data, errors } = await HttpService.get(getApiEndUrl("FETCH_COURSES"));
  if (errors) {
    throw errors;
  }
  return data;
};
