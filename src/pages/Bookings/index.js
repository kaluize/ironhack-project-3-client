import { useEffect, useState } from "react";
import { useParams, Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import { Card, Button, Container, Form } from "react-bootstrap";
import { api } from "../../api/api";

function BookingsPage() {
  const [search, setSearch] = useState("");

  const [resources, setResources] = useState([]);

  const [reload, setReload] = useState(false);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchResources() {
      try {
        const response = await api.get("/resource/all-resource");
        setResources(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchResources();
  }, [reload]);

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  // async function handleSubmit(e) {
  //   e.preventDefault();
  //   try {
  //     await api.get("/resource/all-resource", formBusca);
  //     setReload(!reload);
  //     setFormBusca({
  //       buscarRecurso: "",
  //     });
  //   } catch (error) {
  //     console.log(error);
  //     alert("Erro ao buscar recurso");
  //   }
  // }

  //Nova reserva

  //Listar os recursos escolhidos

  //Escolher a data a ser reservada

  //Buscar horários disponíveis

  //Escolher o horario

  //Montar data com horario

  //Salvar booking

  console.log(resources);

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
              value={search.buscarRecurso}
              onChange={handleSearch}
            />
          </Form.Group>
          {/* <Button variant="primary" className="m-3" onClick={handleSubmit}>
            Buscar
          </Button> */}
        </Form>
        {!isLoading &&
          resources
            .filter(
              (resource) =>
                resource.name.toLowerCase().includes(search.toLowerCase()) ||
                resource.resourceType
                  .toLowerCase()
                  .includes(search.toLowerCase())
            )
            .map((resource) => {
              return (
                <Card key={resource._id} className="m-4">
                  <Card.Body>
                    <img src="" alt={resource.name} />
                    <h3>{resource.name}</h3>
                  </Card.Body>
                  <Card.Footer>
                    <Link to="/booking/availability">
                      <Button>Reservar</Button>
                    </Link>
                  </Card.Footer>
                </Card>
              );
            })}
      </Container>
    </div>
  );
}

export default BookingsPage;
