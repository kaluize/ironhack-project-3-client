import React, { useState, useContext } from 'react';
import { Modal, Button, Col, Form } from "react-bootstrap";
import Horarios from "./Horarios";
import { AuthContext } from "../../contexts/authContext.js";
import { api } from "../../api/api";
import toast from "react-hot-toast";


function Agenda({ resourceId, gestorId }) {
  const [show, setShow] = useState(false);
  
  const { loggedInUser } = useContext(AuthContext);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [isDate, setIsDate] = useState(false);
  console.log("gestor ID", gestorId);

  const [form, setForm] = useState({
    data: "",
    user: loggedInUser.user._id,
    resource: resourceId,
    schedule: "",
    gestor: gestorId
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value});
    setIsDate(true);
  }
  console.log("log do form", form);

  async function handleSubmit(e){
    e.preventDefault();

    try {
      await api.post("/booking/new", form);
      handleClose();
      toast.success("Agendamento realizado!");
    } catch (error) {
      toast.error("Algo deu errado!");

    }
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
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Agendar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Agenda;