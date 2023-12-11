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
