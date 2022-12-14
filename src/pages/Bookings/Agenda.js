import React, { useState } from 'react';
import { Modal, Button, Col, Form } from "react-bootstrap";

function Agenda({ resourceId }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [form, setForm] = useState({
    data: "",
    horario: ""
  });

  function handleChange(e) {
    setForm(e.target.value);
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Reservar
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Agendamento</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Col>
              <Form.Group className="mb-3">
              <Form.Label>Data:</Form.Label>
              <Form.Control
                type="date"
                name="data"
                value={form.date}
                onChange={handleChange}
              />
              </Form.Group>
            </Col>
            <Col>
              <h2>Horários Disponíveis</h2>
              {/** consultar a rota /booking/availability e passar resourceId e data */}
              
            </Col>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Salvar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Agenda;