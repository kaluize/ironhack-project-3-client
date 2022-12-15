import React, { useState } from 'react';
import { Modal, Button, Col, Form } from "react-bootstrap";
import Horarios from "./Horarios"

function Agenda({ resourceId }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [isDate, setIsDate] = useState(false);

  const [form, setForm] = useState({
    data: "",
    horario: ""
  });

  function handleChange(e) {
    setForm({[e.target.name]: e.target.value});
    setIsDate(true);
  }
  console.log(form);
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
          {/** Escolher a data a ser reservada */}
            <Col>
              <Form.Group className="mb-3">
              <Form.Label>Data:</Form.Label>
              <Form.Control
                type="date"
                name="data"
                value={form.data}
                onChange={handleChange}
              />
              </Form.Group>
            </Col>
            <Col>
              <h2>Horários Disponíveis</h2>
              {/** consultar a rota /booking/availability e passar resourceId e data */}
              <p>id do resource: {resourceId}</p>
              <p>data escolhida: {form.data}</p>
              <Horarios resourceId={resourceId} data={form.data}/>
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