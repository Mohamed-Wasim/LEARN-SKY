import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useSharedService = (reqService, id, field) => {
  // Use useSelector to access the permissions from the Redux store
  const { studentDetails } = useSelector((state) => state.student);
  const [resData, setResData] = useState(); // return data

  //to get student detailes
  const getStudentDetailes = () => () => {
    if (studentDetails[field]) {
      return studentDetails[field];
    } else {
      return studentDetails;
    }
  };

  useEffect(() => {
    switch (reqService) {
      case "getStuDetailes":
        setResData(getStudentDetailes());
        break;
      default:
        setResData({});
        break;
    }
  }, [reqService]);
  return resData;
};

export default useSharedService;
