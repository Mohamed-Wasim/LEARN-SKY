import React from 'react';
import './styles.scss';
const LskyMatIcon = ({ name, className, ...rest }) => {
  return (
    <span className={`material-symbols-rounded ${className}`} {...rest}>
      {name}
    </span>
  );
};
export default LskyMatIcon;
