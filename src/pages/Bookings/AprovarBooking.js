import React, { useState } from 'react';
import { Modal, Button, Col, Form } from "react-bootstrap";
import { api } from "../../api/api";
import toast from "react-hot-toast";


function AprovarBooking( { bookingId, reload, setReload, form, setForm, agendamento }) {

  const [show, setShow] = useState(false);
  

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await api.put(`/booking/aprove/${bookingId}`, {...form, status: "Reservado"});
      handleClose();
      setReload(!reload);
      toast.success("Agendamento autorizado com sucesso!");
    } catch (error) {
      toast.error("Algo deu errado!");
    }
  }


  return ( 
    <div>
      <Button variant="success" onClick={handleShow}>
          Aprovar
      </Button>

      <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
          <Modal.Title>Aprovar agendamento</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Confirma o aprovar este agendamento?
            <i>{agendamento}</i>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Voltar
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
              Confirmar
            </Button>
          </Modal.Footer>

      </Modal>
    </div> 
  );
}

export default AprovarBooking;