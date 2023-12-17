import HttpService from "./base.service.js";
import { getApiEndUrl } from "../utils/apiServices.js";

// Service function for fetch courses catagory
export const fetchCourseCat = async () => {
  const { data, errors } = await HttpService.post(
    getApiEndUrl("FETCH_COURSE_CATAGORY")
  );
  if (errors) {
    throw errors;
  }
  return data;
};

// Service function for create courses catagory
export const createCourseCat = async (payload) => {
  const { data, errors } = await HttpService.post(
    getApiEndUrl("SAVE_COURSE_CATAGORY"),
    payload
  );
  if (errors) {
    throw errors;
  }
  return data;
};

// Service function for fetch courses catagory
export const updateCourseCat = async (payload) => {
  const { data, errors } = await HttpService.post(
    getApiEndUrl("UPDATE_COURSE_CATAGORY"),
    payload
  );
  if (errors) {
    throw errors;
  }
  return data;
};
