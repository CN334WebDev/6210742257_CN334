import React from "react";
import Form from "react-bootstrap/Form";
import { Col, Row } from "react-bootstrap";

const fields = {
  color: "white",
  backgroundColor: "#31363b",
  borderColor: "#212529",
  marginBottom: "0.3rem",
};

const ProjectFrom = () => {
  return (
    <div>
      <Form className="form">
        <Row className="mb-3">
          <Form.Group as={Col} controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              style={fields}
              type="text"
              placeholder="Project Name"
              className="form"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="language">
            <Form.Label>Language</Form.Label>
            <Form.Control
              style={fields}
              type="text"
              placeholder="Programming Language"
              className="form"
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="framework">
            <Form.Label>Framework</Form.Label>

            <Form.Control
              style={fields}
              type="text"
              placeholder="Framework"
              className="form"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="tool">
            <Form.Label>Editor</Form.Label>

            <Form.Control
              style={fields}
              type="text"
              placeholder="Editor Development"
              className="form"
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          {" "}
          <Form.Group as={Col} controlId="project_url">
            <Form.Label>Project URL</Form.Label>

            <Form.Control
              style={fields}
              type="text"
              placeholder="Project URL"
              className="form"
            />
          </Form.Group>
          <Form.Group as={Col} controlId="mockup_url">
            <Form.Label>Mockup URL</Form.Label>

            <Form.Control
              style={fields}
              type="text"
              placeholder="Mockup URL"
              className="form"
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          {" "}
          <Form.Group as={Col} controlId="demo_url">
            <Form.Label>Demo URL</Form.Label>

            <Form.Control
              style={fields}
              type="text"
              placeholder="Demo URL"
              className="form"
            />
          </Form.Group>
          <Form.Group as={Col} controlId="date">
            <Form.Label>Project Date</Form.Label>

            <Form.Control
              style={fields}
              type="text"
              placeholder="dd/mm/yyyy"
              className="form"
            />
          </Form.Group>
        </Row>

        <Form.Group as={Col} controlId="description">
          <Form.Label>Description</Form.Label>

          <Form.Control
            style={fields}
            as="textarea"
            row={3}
            placeholder="Project description"
            class="form"
          />
        </Form.Group>

        <button class="btn-create-sub" type="submit" role="button">
          Submit
        </button>
      </Form>
    </div>
  );
};

export default ProjectFrom;
