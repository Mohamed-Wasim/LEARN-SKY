import React, { useState } from 'react';
import { Overlay, Button, Popover } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const LksPopupComponent = () => {
    const [show, setShow] = useState(false);
    const target = React.useRef(null);
  
    return (
      <div>
        <Button ref={target} onClick={() => setShow(!show)}>
          Open Popup
        </Button>
  
        <Overlay target={target.current} show={show} placement="bottom">
          {(props) => (
            <Popover id="popover-basic" {...props}>
              <Popover.Title as="h3">Popup Title</Popover.Title>
              <Popover.Content>
                This is the content of the popup.
              </Popover.Content>
            </Popover>
          )}
        </Overlay>
      </div>
    );
};

export default LksPopupComponent;