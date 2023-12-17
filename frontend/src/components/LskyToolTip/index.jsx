import React from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltips from 'react-bootstrap/Tooltip';
import './styles.scss';
const ToolTip = ({ id, children, tooltip, direction }) => {
  const renderTooltip = (props) => (
    <Tooltips id={id} {...props}>
      {tooltip}
    </Tooltips>
  );
  return (
    <>
      <OverlayTrigger
        placement={direction}
        delay={{ show: 250, hide: 400 }}
        overlay={renderTooltip}
      >
        <span id={id}>{children}</span>
      </OverlayTrigger>
    </>
  );
};

export default ToolTip;
