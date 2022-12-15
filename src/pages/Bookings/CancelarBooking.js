import React, { useState, useContext } from 'react';
import { Modal, Button, Col, Form } from "react-bootstrap";
import { api } from "../../api/api";

function CancelarBooking( { bookingId, agendamento, setReload }) {

  const [show, setShow] = useState(false);
  

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await api.delete(`/booking/delete/${bookingId}`);
      handleClose();
      setReload();
      alert("Cancelamento de agendamento realizado!");
    } catch (error) {
      alert("Algo deu errado!");
    }
  }


  return ( 
    <div>
      <Button variant="primary" onClick={handleShow}>
          Cancelar
      </Button>

      <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
          <Modal.Title>Cancelar agendamento</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Confirma o cancelamento deste agendamento?
            <i>{agendamento}</i>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Voltar
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
              Confirmar cancelamento
            </Button>
          </Modal.Footer>

      </Modal>
    </div> 
  );
}

export default CancelarBooking;