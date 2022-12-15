import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import NewUser from "./NewUser.js"

function ModalNewGestor() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="button-modal">
        Novo Usuário
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Novo gestor</Modal.Title>
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

export default ModalNewGestor;