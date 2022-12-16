import { useEffect, useState } from "react";
import { Card, Container, Form } from "react-bootstrap";
import { api } from "../../api/api";
import Agenda from "./Agenda"

function BookingsPage() {
  const [search, setSearch] = useState("");
  const [resources, setResources] = useState([]);
  //const [reload, setReload] = useState(false);
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
  }, []);

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  return (
    <div>
      <h1>Nova reserva</h1>
      {/*Escolher o recurso*/}
      <Container className="border rounded mt-3">
        <Form>
          <Form.Group className="mt-3">
            <Form.Label>Qual recurso você gostaria de reservar?</Form.Label>
            <Form.Control
              type="text"
              placeholder="Buscar pelo nome ou tipo do recurso"
              name="buscarRecurso"
              value={search.buscarRecurso}
              onChange={handleSearch}
            />
          </Form.Group>
        

        </Form>
        {/** Listar os recursos escolhidos */}
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
                    <p>Horários disponiveis</p>
                    <p>{resource.availableBooking}</p>
                  </Card.Body>
                  <Card.Footer>
                    <Agenda resourceId={resource._id} gestorId={resource.gestor}/>
                  </Card.Footer>
                </Card>
              );
            })}
      </Container>
    </div>
  );
}

export default BookingsPage;
