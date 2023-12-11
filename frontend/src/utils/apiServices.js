const apiEndUrl = {
  STUDENT_REGISTER: "/student/register",
  STUDENT_SIGHN_IN: "/student/login",
  STUDENT_FETCH_COURSES: "/student/fetch-courses",
  ADD_COURSE_TO_CART: "/student/add-course-to-cart"
};

// To get api end url based on the key passed in.
export const getApiEndUrl = (key) => apiEndUrl[key];
