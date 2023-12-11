import HttpService from "./base.service.js";
import { getApiEndUrl } from "../utils/apiServices.js";

// Service function for register new student
export const createStudent = async (payload) => {
  const { data, errors } = await HttpService.post(
    getApiEndUrl("STUDENT_REGISTER"),
    payload
  );
  if (errors) {
    throw errors;
  }
  return data;
};

// Service function for sighn in student
export const onSighnIn = async (payload) => {
  const { data, errors } = await HttpService.post(
    getApiEndUrl("STUDENT_SIGHN_IN"),
    payload
  );
  if (errors) {
    throw errors;
  }
  return data;
};

// Service function for add course  to cart
export const addCourseToCart = async (payload) => {
  console.log("payload", payload);
  const { data, errors } = await HttpService.post(
    getApiEndUrl("ADD_COURSE_TO_CART"),
    payload
  );
  if (errors) {
    throw errors;
  }
  return data;
};
