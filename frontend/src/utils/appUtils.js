// import {permissions} from "@store/slices/commonslice";
import { useSelector } from 'react-redux/es/hooks/useSelector';
export const getBingo = (perm) => {
  const { permissions } = useSelector((state) => state.common);
  if (permissions) {
    console.log(permissions);
    return permissions.includes(perm);
  }
  return false;
};

export const onlyNumber = (event, change) => {
  event.preventDefault();
  if (!isNaN(event.target.value)) {
    change();
  }
};

// Download with file name
export const dwnldWithFileNm = (data, type, filename) => {
  const oFileTypes = {
    PDF: 'application/pdf',
    EXCEL: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
  };
  const blob = new Blob([data], { type: oFileTypes[type] });
  const url = window.URL.createObjectURL(blob);
  const anchortag = document.createElement('a');

  document.body.appendChild(anchortag);
  anchortag.style = 'display: none';
  anchortag.href = url;
  anchortag.download = filename;
  anchortag.click();
  window.URL.revokeObjectURL(url);
  anchortag.remove();
};
