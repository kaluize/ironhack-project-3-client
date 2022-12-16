import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { EditResource } from "./EditResource.js"
import "../../app.css"

function EditResourceModal({resource}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="blueButton" variant="primary" onClick={handleShow}>
        Editar
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar recurso</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditResource
            handleClose={handleClose}
            resource={resource} 
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Sair
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditResourceModal;