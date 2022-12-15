import React, { useState, useContext } from 'react';
import { api } from "../../api/api";
import { Row, Col, Container, Form, Button, ThemeProvider, FormLabel, FormControl } from "react-bootstrap";
import { AuthContext } from "../../contexts/authContext.js";


function EditUser({handleClose, user}) {

  const { loggedInUser } = useContext(AuthContext);

  const [form, setForm] = useState({
    "name":user.name,
    "idNumber":user.idNumber,
    "email":user.email,
    "role":user.role
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
      await api.put(`/user/edit-any/${user._id}`, form /*{ ...form, img: imgURL }*/);

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
            placeholder={form.name}
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
            placeholder={form.email}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <FormLabel>Matrícula:</FormLabel>
          <FormControl
            type="text"
            name="idNumber"
            value={form.idNumber}
            onChange={handleChange}
            placeholder={form.idNumber}
            />
        </Col>
        <Col>
          <FormLabel>Tipo:</FormLabel>
          <Form.Select
            name="role"
            onChange={handleChange}
            >
                <option value={form.role}>{form.role}</option>
                <option value="USER">Usuário</option>
                <option value="GESTOR">Gestor</option>
                
            </Form.Select>
        </Col>              
      </Row>
      <Button
        as="input"
        type="submit"
        value="Editar"
        onClick={handleSubmit}
      />
    </Container>
  </ThemeProvider>);
}

export default EditUser;