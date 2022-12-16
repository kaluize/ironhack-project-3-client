import { api } from "../../api/api";
import { useState, useEffect } from "react";
import { Card, Container, Form, Row, Col, Button } from "react-bootstrap";
import NewResourceModal from "../../components/ResourceComponents/NewResourceModal.js";
import EditResourceModal from "../../components/ResourceComponents/EditResourceModal.js";



export function Resources(){
  const [resources, setResources] = useState([]);
  const [reload, setReload] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");



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

  async function handleDelete (resourceId) {
    await api.delete(`/resource/delete/${resourceId}`);
    setReload(!reload);
  }

  return (
    <div>
      <Container className="border rounded mt-3">
        <h1>Recursos cadastrados</h1>
        <NewResourceModal />
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
                    <h2>{resource.resourceType}</h2>
                    <h3>{resource.name}</h3>
                    <p><b>Tombamento</b> {resource.assessmentNumber} - 
                        <b>Gestor</b> <i>{resource.gestor.name}</i></p>
                  </Card.Body>
                  <Card.Footer>
                    <Row>
                      <Col>
                        <EditResourceModal resource={resource} /> 
                      </Col>
                      <Col>
                      <Button variant="danger" onClick={ () => handleDelete(resource._id)}> 
                          Apagar
                        </Button>
                      </Col>
                    </Row>
                  </Card.Footer>
                </Card>
              );
            })}
      </Container>

    </div>
  );
}
