import React from "react";
import Badge from "react-bootstrap/Badge";
import { BsX } from "react-icons/bs"; // Import the close icon
import "./styles.scss";

const LskyBadge = (props) => {
  return (
    <Badge {...props}>
      {props.text}
      {props.onRemove && (
        <span
          className="remove-icon"
          onClick={props.onRemove}
          style={{ color: props.iconColor }}
        >
          <BsX />
        </span>
      )}
    </Badge>
  );
};

export default LskyBadge;
