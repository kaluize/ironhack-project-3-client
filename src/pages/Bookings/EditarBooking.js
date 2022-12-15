import React, { useState, useContext } from 'react';
import { Modal, Button, Col, Row, Form } from "react-bootstrap";
import { api } from "../../api/api";
import Horarios from "./Horarios";
import { AuthContext } from "../../contexts/authContext.js";

function EditarBooking( { bookingId, agendamento, resourceId, gestorId, reload, setReload }) {

  const [show, setShow] = useState(false);
  
  const { loggedInUser } = useContext(AuthContext);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [isDate, setIsDate] = useState(false);

  const [form, setForm] = useState({
    data: "",
    user: loggedInUser.user._id,
    resource: resourceId,
    schedule: "",
    gestor: gestorId,
    status: "Pendente"
  });

  console.log("form do edit", form);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await api.put(`/booking/edit/${bookingId}`, {...form});
      handleClose();
      setReload(!reload);
      alert("Agendamento alterado com sucesso!");
    } catch (error) {
      alert("Algo deu errado!");
    }
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value});
    setIsDate(true);
  }


  return ( 
    <div>
      <Button variant="primary" onClick={handleShow}>
        Alterar
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        <Modal.Title>Alterar agendamento</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <i>{agendamento}</i><br />
          Escolha nova data e horário:
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
              {isDate && (
                <Horarios form={form} setForm={setForm}/>
              )}
            </Col>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Col>
            <Button variant="secondary" onClick={handleClose}>
              Voltar
            </Button>
          </Col>
          <Col>
            <Button variant="primary" onClick={handleSubmit}>
              Confirmar reagendamento
            </Button>
          </Col>
          
        </Modal.Footer>
      </Modal>
    </div> 
  );
}

export default EditarBooking;