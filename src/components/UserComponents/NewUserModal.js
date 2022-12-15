import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import NewUser from "./NewUser.js"
import "../../app.css"

function ModalNewUser() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="blueButton" variant="primary" onClick={handleShow}>
        CADASTRE-SE
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Novo usuário</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <NewUser
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

export default ModalNewUser;