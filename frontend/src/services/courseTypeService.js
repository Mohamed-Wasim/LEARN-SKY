import HttpService from "./base.service.js";
import { getApiEndUrl } from "../utils/apiServices.js";

// Service function for fetch courses type
export const fetchCourseType = async () => {
  const { data, errors } = await HttpService.post(
    getApiEndUrl("FETCH_COURSE_TYPE")
  );
  if (errors) {
    throw errors;
  }
  return data;
};

// Service function for create courses type
export const createCourseType = async (payload) => {
  const { data, errors } = await HttpService.post(
    getApiEndUrl("SAVE_COURSE_TYPE"),
    payload
  );
  if (errors) {
    throw errors;
  }
  return data;
};

// Service function for fetch courses type
export const updateCourseType = async (payload) => {
  const { data, errors } = await HttpService.post(
    getApiEndUrl("UPDATE_COURSE_TYPE"),
    payload
  );
  if (errors) {
    throw errors;
  }
  return data;
};
