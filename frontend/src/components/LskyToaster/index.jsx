import React from 'react';
import './styles.scss';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const toastIcon = {
  success: 'task_alt',
  warning: 'warning',
  error: 'report',
  info: 'info'
};
const toastClass = {
  success: {
    bgClass: 'success-background',
    iconClass: 'toaster-icons_success'
  },
  warning: {
    bgClass: 'warning-background',
    iconClass: 'toaster-icons_warning'
  },
  error: { bgClass: 'error-background', iconClass: 'toaster-icons_error' },
  info: { bgClass: 'information-background', iconClass: 'toaster-icons_info' }
};

export const LskyToaster = (toastHeader, toastContent, autoClose) => {
  toast(
    <p className="toaster-heading">
      <span
        className={`material-symbols-rounded ${toastClass[toastHeader].iconClass}`}
      >
        {toastIcon[toastHeader]}
      </span>
      <span>{toastContent}</span>
    </p>,
    {
      className: toastClass[toastHeader].bgClass,
      position: 'bottom-right',
      autoClose: autoClose ?? 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined
    }
  );
};
