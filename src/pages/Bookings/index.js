import { useEffect, useState } from "react";
import { useParams, Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import { Card, Button, Container, Form } from "react-bootstrap";
import { api } from "../../api/api";

function BookingsPage() {

  const [formBusca, setFormBusca] = useState({
    buscarRecurso: ""
  });

  const [resources, setResources] = useState([]);

  const [reload, setReload] = useState(false);


  async function handleChange(e) {
    e.preventDefault();
    try {
      await api.get("/resource/all-resource", formBusca);
      setReload(!reload);
      setFormBusca({
        buscarRecurso: ""
      });
    } catch (error) {
      console.log(error);
      alert("Erro ao buscar recurso");
    }
  }

  //Nova reserva

 

  //Listar os recursos escolhidos

  //Escolher a data a ser reservada

  //Buscar horários disponíveis

  //Escolher o horario

  //Montar data com horario

  //Salvar booking

  return (
    <div>
      <h1>Nova reserva</h1>
      {/*Escolher o recurso*/}
      <Container className="border rounded mt-3">
      <Form>
          <Form.Group className="mt-3">
            <Form.Label>Escolha o recurso</Form.Label>
            <Form.Control
              type="text"
              placeholder="Buscar pelo nome ou tipo do recurso"
              name="buscarRecurso"
              value={formBusca.buscarRecurso}
              onChange={handleChange}
            />
          </Form.Group>
          <Button variant="primary" className="m-3" onClick={handleSubmit}>
            Buscar
          </Button>
        </Form>
      </Container>
      
    </div>
    );
}

export default BookingsPage;