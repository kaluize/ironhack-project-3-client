import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Resource } from "./NewResource.js"
import "../../app.css"

function NewResourceModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="blueButton" variant="primary" onClick={handleShow}>
        Novo Recurso
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Novo recurso</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Resource
            handleClose={handleClose}
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

export default NewResourceModal;