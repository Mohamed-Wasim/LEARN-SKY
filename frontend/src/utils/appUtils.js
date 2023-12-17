// import {permissions} from "@store/slices/commonslice";
import { useSelector } from "react-redux/es/hooks/useSelector";
// export const getBingo = (perm) => {
//   const { permissions } = useSelector((state) => state.common);
//   if (permissions) {
//     console.log(permissions);
//     return permissions.includes(perm);
//   }
//   return false;
// };

export const onlyNumber = (event, change) => {
  event.preventDefault();
  if (!isNaN(event.target.value)) {
    change();
  }
};

// Download with file name
export const dwnldWithFileNm = (data, type, filename) => {
  const oFileTypes = {
    PDF: "application/pdf",
    EXCEL: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
  };
  const blob = new Blob([data], { type: oFileTypes[type] });
  const url = window.URL.createObjectURL(blob);
  const anchortag = document.createElement("a");

  document.body.appendChild(anchortag);
  anchortag.style = "display: none";
  anchortag.href = url;
  anchortag.download = filename;
  anchortag.click();
  window.URL.revokeObjectURL(url);
  anchortag.remove();
};

/**
 *function to validate number field
 * @param {string} event event of the input field
 * @param {number} min minimum value of the field
 * @param {number} max maximum value of the field
 * @param {function} handleChange functionality which needs to done based on the input field
 */
export const validateNumberField = (event, handleChange, min, max) => {
  event.preventDefault();
  if (!isNaN(event.target.value)) {
    if (min || max) {
      if (min && max) {
        if (event.target.value <= max && event.target.value >= min) {
          handleChange(event);
        }
      } else if (max) {
        if (event.target.value <= max) {
          handleChange(event);
        }
      } else if (min) {
        if (event.target.value >= min) {
          handleChange(event);
        }
      }
    } else {
      handleChange(event);
    }
  }
};
