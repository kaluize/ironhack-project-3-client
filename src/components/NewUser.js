import { useState } from "react";
import axios from "axios";
import {
  Row,
  Col,
  Container,
  Form,
  Button,
  ThemeProvider,
} from "react-bootstrap";

function NewUser() {
    
  const [form, setForm] = useState({
    "name":"",
    "idNumber":"",
    "email":"",
    "role":"USER",
    "resources":[],
    "booking":[],
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    await axios.post("user/signup", form);

    setForm({
        "name":"",
        "idNumber":"",
        "email":"",
        "password":"",
        "role":"USER",
        "resources":[],
        "booking":[],
    });
  }

  return (
    <ThemeProvider
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
      minBreakpoint="xxs"
    >
      <Container fluid="md">
        <Form.Label>Nome</Form.Label>
        <Form.Control
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
        />
        <Form.Label>Matrícula</Form.Label>
        <Form.Control
            type="text"
            name="idNumber"
            value={form.idNumber}
            onChange={handleChange}
        />
        <Form.Label>Endereço eletrônico</Form.Label>
        <Form.Control
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
        />
        <Row>
            <Col>
                <Form.Label>Senha</Form.Label>
                <Form.Control
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                /> 
            </Col>
            <Col>
                <Form.Label>Confirmar senha</Form.Label>
                <Form.Control
                    type="password"
                    name="confirm"
                /> 
            </Col>
        </Row>
        <Button
          as="input"
          type="submit"
          value="Novo usuário"
          onClick={handleSubmit}
        />
      </Container>
    </ThemeProvider>
  );
}

export default NewUser;