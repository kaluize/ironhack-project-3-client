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
      <Button variant="primary" className="blueButton" onClick={handleShow}>
        Cadastre-se
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
          <Button className="modalGrayButton" variant="secondary" onClick={handleClose}>
            Sair
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalNewUser;