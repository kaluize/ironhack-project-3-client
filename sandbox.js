import { FormControl, FormLabel } from "react-bootstrap";
import { Form } from "react-router-dom";

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
        <Row>
          <Col>
            <FormLabel>Foto:</FormLabel>
            <FormControl
              type="file"
              onChange={handleImage}
            />
          </Col>
        </Row>
        <Button
          as="input"
          type="submit"
          value="Nova Posição"
          onClick={handleSubmit}
          {return form.password === form.controlPassword ? (''):(disabled)}
        />
      </Container>
    </ThemeProvider>

  );