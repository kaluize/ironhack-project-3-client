import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import EditMe from "./EditMe.js"
import "../../../src/app.css"

function EditMeModal({user}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="blueButton">
        Editar
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Meu Perfil</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditMe
            handleClose={handleClose}
            user={user}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} className="modalGrayButton">
            Sair
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditMeModal;