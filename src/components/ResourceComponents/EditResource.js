import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/authContext";
import { api } from "../../api/api";
import {  Form, Button, Row, Col } from "react-bootstrap";

export function EditResource({handleClose, resource}) {
    const { loggedInUser } = useContext(AuthContext);
    const [form, setForm] = useState({
      name: "",
      resourceType: "",
      assessmentNumber: "",
      availableBooking: [],
    });

    useEffect(() => {
        setForm(resource)
    }, [])
    function handleChange(e) {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
    async function handleSubmit(e) {
      e.preventDefault();
      try {
        await api.put(`/resource/edit/${resource._id}`, {
          ...form,
          gestor: loggedInUser.user._id,
        });
        setForm({
          name: "",
          resourceType: "",
          assessmentNumber: "",
          gestor: "",
          availableBooking: [],
        });
        handleClose()
      } catch (error) {
        console.log(error);
      }
    }
    const resources = ["LAB", "INSTRUMENTO", "ESTAÇÃO DE TRABALHO", "SALA"];
    const segunda = [
      "1 8:00",
      "1 9:00",
      "1 10:00",
      "1 11:00",
      "1 12:00",
      "1 13:00",
      "1 14:00",
      "1 15:00",
      "1 16:00",
      "1 17:00",
      "1 18:00",
      "1 19:00",
      "1 20:00",
      "1 21:00",
      "1 22:00",
    ];
    const terça = [
      "2 8:00",
      "2 9:00",
      "2 10:00",
      "2 11:00",
      "2 12:00",
      "2 13:00",
      "2 14:00",
      "2 15:00",
      "2 16:00",
      "2 17:00",
      "2 18:00",
      "2 19:00",
      "2 20:00",
      "2 21:00",
      "2 22:00",
    ];
    const quarta = [
      "3 8:00",
      "3 9:00",
      "3 10:00",
      "3 11:00",
      "3 12:00",
      "3 13:00",
      "3 14:00",
      "3 15:00",
      "3 16:00",
      "3 17:00",
      "3 18:00",
      "3 19:00",
      "3 20:00",
      "3 21:00",
      "3 22:00",
    ];
    const quinta = [
      "4 8:00",
      "4 9:00",
      "4 10:00",
      "4 11:00",
      "4 12:00",
      "4 13:00",
      "4 14:00",
      "4 15:00",
      "4 16:00",
      "4 17:00",
      "4 18:00",
      "4 19:00",
      "4 20:00",
      "4 21:00",
      "4 22:00",
    ];
    const sexta = [
      "5 8:00",
      "5 9:00",
      "5 10:00",
      "5 11:00",
      "5 12:00",
      "5 13:00",
      "5 14:00",
      "5 15:00",
      "5 16:00",
      "5 17:00",
      "5 18:00",
      "5 19:00",
      "5 20:00",
      "5 21:00",
      "5 22:00",
    ];
    function handleCheckBoxSemana(e) {
      const clone = { ...form };
      if (e.target.checked) {
        clone.availableBooking.push(e.target.name);
      }
      if (!e.target.checked) {
        const index = clone.availableBooking.indexOf(e.target.name);
        clone.availableBooking.splice(index, 1);
      }
      console.log(e.target.checked)
      console.log(e.target.name)
      setForm(clone);
    }

    console.log(form)
    return (
      <>
        <Form>
          <Form.Group>
            <Form.Label>Tipo de Recurso</Form.Label>
            <Form.Select name="resourceType" onChange={handleChange}>
              {resources.map((element) => {
                return <option value={element}>{element}</option>;
              })}
            </Form.Select>
          </Form.Group>
          <Form.Group>
            <Form.Label>Nome</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Numero Tombamento</Form.Label>
            <Form.Control
              type="text"
              name="assessmentNumber"
              value={form.assessmentNumber}
              onChange={handleChange}
            />
          </Form.Group>
        <Row>
        <Col>
          <Form.Group>
            <Form.Label>Dias da Semana</Form.Label>
            {segunda.map((element) => {
              let hora = element.slice(2);
              return (
                <Form.Check
                  type="checkbox"
                  id="checkbox"
                  label={`Segunda Feira - ${hora}`}
                  name={element}
                  checked={form.availableBooking.includes(element)}
                  onChange={handleCheckBoxSemana}
                  key={element}
                />
              );
            })}
          </Form.Group>
          </Col>
          <Col>
          <Form.Group>
            <Form.Label>Dias da Semana</Form.Label>
            {terça.map((element) => {
              let hora = element.slice(2);
              return (
                <Form.Check
                  type="checkbox"
                  id="checkbox"
                  label={`Terça feira - ${hora}`}
                  name={element}
                  checked={form.availableBooking.includes(element)}
                  onChange={handleCheckBoxSemana}
                  key={element}
                />
              );
            })}
          </Form.Group>
          </Col>
          <Col>
          <Form.Group>
            <Form.Label>Dias da Semana</Form.Label>
            {quarta.map((element) => {
              let hora = element.slice(2);
              return (
                <Form.Check
                  type="checkbox"
                  id="checkbox"
                  label={`Quarta Feira - ${hora}`}
                  name={element}
                  checked={form.availableBooking.includes(element)}
                  onChange={handleCheckBoxSemana}
                  key={element}
                />
              );
            })}
          </Form.Group>
          </Col>
          <Col>
          <Form.Group>
            <Form.Label>Dias da Semana</Form.Label>
            {quinta.map((element) => {
              let hora = element.slice(2);
              return (
                <Form.Check
                  type="checkbox"
                  id="checkbox"
                  label={`Quinta Feira - ${hora}`}
                  name={element}
                  checked={form.availableBooking.includes(element)}
                  onChange={handleCheckBoxSemana}
                  key={element}
                />
              );
            })}
          </Form.Group>
          </Col>
          <Col>
          <Form.Group>
            <Form.Label>Dias da Semana</Form.Label>
            {sexta.map((element) => {
              let hora = element.slice(2);
              return (
                <Form.Check
                  type="checkbox"
                  id="checkbox"
                  label={`Sexta Feira - ${hora}`}
                  name={element}
                  checked={form.availableBooking.includes(element)}
                  onChange={handleCheckBoxSemana}
                  key={element}
                />
              );
            })}
          </Form.Group>
          </Col>
        </Row>
          <Button
            as="input"
            type="submit"
            value="Novo Recurso"
            onClick={handleSubmit}
           />
        </Form>
      </>
    );
  }