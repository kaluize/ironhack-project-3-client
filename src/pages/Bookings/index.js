import { useEffect, useState } from "react";
import { Card, Container, Form } from "react-bootstrap";
import { api } from "../../api/api";
import Agenda from "./Agenda"

function BookingsPage() {
  const [search, setSearch] = useState("");
  const [resources, setResources] = useState([]);
  //const [reload, setReload] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  console.log(resources);


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
      <Container className="border rounded mt-3">
      <h1>Fazer nova reserva</h1>
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
              console.log("resource gestor", resource.gestor);
              let day = [];
              resource.availableBooking.forEach( (semana) => {
                      if (semana[0] == 1) day[1] = "| Segundas-feira |"; 
                      if (semana[0] == 2) day[2] = " Terças-feira |"; 
                      if (semana[0] == 3) day[3] = " Quartas-feira |"; 
                      if (semana[0] == 4) day[4] = " Quintas-feira |"; 
                      if (semana[0] == 5) day[5] = " Sextas-feira |"; 
                    })
                let daysOnly = new Set(day);
              return (
                <Card key={resource._id} className="m-4">
                  <Card.Body>
                    <h3>{resource.name}</h3>
                    <p>Horários disponiveis</p>
                    <p>{daysOnly}</p>
                  </Card.Body>
                  <Card.Footer>
                    <Agenda resourceId={resource._id} gestorId={resource.gestor._id}/>
                  </Card.Footer>
                </Card>
              );
            })}
      </Container>
    </div>
  );
}

export default BookingsPage;
