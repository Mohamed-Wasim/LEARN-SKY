import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import ModalBox from "react-bootstrap/Modal";
import "./styles.scss";
import {
  ModalHeader,
  ModalTitle,
  ModalBody,
  ModalFooter
} from "react-bootstrap";

function LskyModal(props) {
  // const [show, setShow] = useState(false);

  const handleClose = () => {
    props.mdlHndlr(false);
  };

  return (
    <>
      <ModalBox
        {...props}
        size={props?.size}
        show={props.showMdl}
        onHide={handleClose}
        backdrop={props.isBackdropDynamic ? "dynamic" : "static"}
        keyboard={props.isBackdropDynamic}
      >
        {props.header && (
          <ModalHeader closeButton>
            <ModalTitle>{props.header}</ModalTitle>
          </ModalHeader>
        )}
        <ModalBody>{props.children}</ModalBody>
        {props.footer && <ModalFooter>{props.footer}</ModalFooter>}
      </ModalBox>
    </>
  );
}

export default LskyModal;
