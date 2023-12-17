const apiEndUrl = {
  STUDENT_REGISTER: "/student/register",
  STUDENT_SIGHN_IN: "/student/login",
  STUDENT_FETCH_COURSES: "/student/fetch-courses",
  ADD_COURSE_TO_CART: "/student/add-course-to-cart",
  DOMAIN_SEARCH_LANGUAGES: "domain/search-languages",
  FETCH_COURSE_CATAGORY: "coursecatagoary/fetch",
  SAVE_COURSE_CATAGORY: "coursecatagoary/save",
  UPDATE_COURSE_CATAGORY: "coursecatagoary/update",
  FETCH_COURSE_TYPE: "coursetype/fetch",
  SAVE_COURSE_TYPE: "coursetype/save",
  UPDATE_COURSE_TYPE: "coursetype/update",
  CREATE_COURSE: "course/create",
  FETCH_COURSES: "course/fetch"
};

// To get api end url based on the key passed in.
export const getApiEndUrl = (key) => apiEndUrl[key];
