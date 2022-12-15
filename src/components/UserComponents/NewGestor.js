import { useState } from "react";
import { api } from "../../api/api";
import { Row, Col, Container, Form, Button, ThemeProvider, FormLabel, FormControl } from "react-bootstrap";


function NewUser({handleClose}) {

  const [form, setForm] = useState({
    "name":"",
    "idNumber":"",
    "email":"",
    "password":"",
    "confirmPassword":"",
    "role":"GESTOR",
    "resources":[],
    "booking":[],
  });

  // const [img, setImg] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  // function handleImage(e) {
  //   setImg(e.target.files[0]);
  // }

  //async function handleUpload() {
  //  try {
  //    const uploadData = new FormData();
  //    uploadData.append("picture", img);

  //  const response = await api.post("/upload-image", uploadData);

  //    return response.data.url;
  //  } catch (error) {
  //    console.log(error);
  //  }
  //}

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      //const imgURL = await handleUpload();
      await api.post("/user/signup", form /*{ ...form, img: imgURL }*/);

      handleClose()
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <ThemeProvider
    breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
    minBreakpoint="xxs"
  >
    <Container fluid="md">
      <Row>
        <Col>
          <Form.Label>Nome:</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
        </Col>
        <Col>
          <Form.Label>Matrícula:</Form.Label>
          <Form.Control
            type="text"
            name="idNumber"
            value={form.idNumber}
            onChange={handleChange}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Label>e-mail:</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <FormLabel>Senha:</FormLabel>
          <FormControl
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            />
        </Col>
        <Col>
          <FormLabel>Confirmar Senha:</FormLabel>
          <FormControl
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            />
        </Col>            
      </Row>
      <Button
        as="input"
        type="submit"
        value="Novo Gestor"
        onClick={handleSubmit}
      />
    </Container>
  </ThemeProvider>);
}

export default NewUser;