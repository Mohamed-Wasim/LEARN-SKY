import Offcanvas from 'react-bootstrap/Offcanvas';
import './styles.scss';
const LskySideModal = (props) => {
  return (
    <Offcanvas show={props.show} onHide={props.handleClose} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title className="fs-4 text-primary font-bold">
          {props.t(props.title)}
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>{props.children}</Offcanvas.Body>
    </Offcanvas>
  );
};

export default LskySideModal;
