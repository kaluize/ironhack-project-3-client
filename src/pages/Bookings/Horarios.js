import { useEffect, useState } from "react";
import { useParams, Routes, Route, Link } from "react-router-dom";
import { Card, Button, Container, Form } from "react-bootstrap";
import { api } from "../../api/api";

function Horarios({ resourceId, data }) {

  const [freeHours, setFreeHours] = useState([]);

  const [reload, setReload] = useState(false);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchFreeHours() {
      try {
        const response = await api.
          get("/booking/availability", 
            {resource:resourceId},
            {schedule: data});
        setFreeHours(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchFreeHours();
  }, [reload]);

  return ( 
    
    <div>
      {/*Escolher o horario*/}
      {/* <Container className="border rounded mt-3">
        <h2>Horários disponíveis</h2>
        <Form>
       
        {!isLoading &&
          freeHours
            .map((hour) => {
              return (
                <div key={`default-${type}`} className="mb-3">
                  <Form.Check 
                    type={type}
                    id={`default-${type}`}
                    label={`default ${type}`}
                  />
                </div>
              );
            })}       
        </Form>
      </Container>
      */}
    </div> 
  );
}

export default Horarios;