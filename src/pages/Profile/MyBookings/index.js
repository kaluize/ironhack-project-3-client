import { useEffect, useState, useContext } from "react";
import { Card, Container, Form, Col, Row } from "react-bootstrap";
import { api } from "../../../api/api";
import CancelarBooking from "../../Bookings/CancelarBooking";
import EditarBooking from "../../Bookings/EditarBooking";
import AprovarBooking from "../../Bookings/AprovarBooking";
import { AuthContext } from "../../../contexts/authContext.js";

function MyBookings() {
  //listar os recursos reservados por mim
  //const [search, setSearch] = useState("");
  const [myBookings, setMyBookings] = useState([]);
  const [gestorBookings, setGestorBookings] = useState([]);


  const [reload, setReload] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const { loggedInUser } = useContext(AuthContext);
  

  useEffect(() => {
    async function fetchMyBookings() {
      try {
        const response = await api.get("/booking/my-bookings");
        if (loggedInUser.user.role === "GESTOR") {
          const response2 = await api.get("/booking/gestor-bookings");
          setGestorBookings(response2.data);
        }
        setMyBookings(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMyBookings();
  }, [reload]);
  
  console.log("myBookings", myBookings);
  console.log("gestorBookings", gestorBookings);

  return (
    <div>
      <h1>Minhas reservas</h1>
      {/*Escolher o recurso*/}
      <Container className="border rounded mt-3">
        
        {/** Listar os recursos escolhidos */}
        {!isLoading &&
          myBookings
            .map((booking) => {
              return (
                <Card key={booking._id} className="m-4">
                  <Card.Body>
                    <h3>{booking.resource.name}</h3>
                    <h4>Horário reservado: {booking.schedule}</h4>
                    <p><i>Status: {booking.status}</i></p>
                  </Card.Body>
                  <Card.Footer>
                    <Row>
                      <Col>
                        <CancelarBooking 
                        bookingId={booking._id} 
                        agendamento={`${booking.resource.name} em ${booking.schedule}`}
                        setReload={setReload}
                        />
                      </Col>
                      <Col>
                        <EditarBooking 
                        bookingId={booking._id}
                        agendamento={`${booking.resource.name} em ${booking.schedule}`}
                        resourceId={booking.resource._id}
                        gestorId={booking.gestor}
                        setReload={setReload}
                        reload={reload}
                      />
                      </Col>
                      <Col>
                        {(booking.status === "Pendente") &&
                          (loggedInUser.user.role === "GESTOR") && 
                          ( <AprovarBooking 
                            bookingId={booking._id} 
                            setReload={setReload} 
                            reload={reload}/>
                        )}
                      </Col>
                    </Row>
                  </Card.Footer>
                </Card>
              );
            })}
          <h1>Reservas feitas aos meus recursos</h1>
            {!isLoading &&
            gestorBookings.map((booking) => {
              return (
                <Card key={booking._id} className="m-4">
                  <Card.Body>
                    <h3>{booking.resource.name}</h3>
                    <p>Reservado por {booking.user.name} e-mail: {booking.user.email}</p>
                    <h4>Horário reservado: {booking.schedule}</h4>
                    <p>Gestor responsável: {booking.gestor.name} - <i>Status: {booking.status}</i></p>
                  </Card.Body>
                  <Card.Footer>
                    <Row>
                      <Col>
                        <CancelarBooking 
                        bookingId={booking._id} 
                        agendamento={`${booking.resource.name} em ${booking.schedule}`}
                        setReload={setReload}
                        />
                      </Col>
                      <Col>
                        <EditarBooking 
                        bookingId={booking._id}
                        agendamento={`${booking.resource.name} em ${booking.schedule}`}
                        resourceId={booking.resource._id}
                        gestorId={booking.gestor}
                        setReload={setReload}
                        reload={reload}
                      />
                      </Col>
                      <Col>
                        {(booking.status === "Pendente") &&
                          (loggedInUser.user.role === "GESTOR") && 
                          ( <AprovarBooking 
                            bookingId={booking._id} 
                            setReload={setReload} 
                            reload={reload}/>
                        )}
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

export default MyBookings;
