import { useLocation } from "@reach/router";
import React from "react";
import { Alert, Button, Col, Form, Row } from "react-bootstrap";

const PetForm = (props) => {
  const { pet, handleChange, handleSubmit, errors } = props;
  const location = useLocation();

  return (
    <>
      {location.pathname === "/pets/new" ? (
        <h5 className="my-4">Know a pet needing a home?</h5>
      ) : (
        <h5 className="my-4">Edit {pet.name}</h5>
      )}
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={pet.name ? pet.name : ""}
                onChange={handleChange}
              />
            </Form.Group>

            {errors.name ? (
              <Form.Group className="mt-4">
                <Alert variant="danger">{errors.name.message}</Alert>
              </Form.Group>
            ) : (
              ""
            )}

            <Form.Group className="my-4">
              <Form.Label>Type</Form.Label>
              <Form.Control
                type="text"
                name="type"
                value={pet.type ? pet.type : ""}
                onChange={handleChange}
              />
            </Form.Group>

            {errors.type ? (
              <Form.Group>
                <Alert variant="danger">
                  {errors.type.message}
                </Alert>
              </Form.Group>
            ) : (
              ""
            )}

            <Form.Group>
              <Form.Label>Desc</Form.Label>
              <Form.Control
                type="text"
                name="desc"
                value={pet.desc ? pet.desc : ""}
                onChange={handleChange}
              />
            </Form.Group>

            {errors.desc ? (
              <Form.Group className="mt-4">
                <Alert variant="danger">
                  {errors.desc.message}
                </Alert>
              </Form.Group>
            ) : (
              ""
            )}
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Skill 1</Form.Label>
              <Form.Control
                type="text"
                name="skillone"
                value={pet.skillone ? pet.skillone : ""}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="my-4">
              <Form.Label>Skill 2</Form.Label>
              <Form.Control
                type="text"
                name="skilltwo"
                value={pet.skilltwo ? pet.skilltwo : ""}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Skill 3</Form.Label>
              <Form.Control
                type="text"
                name="skillthree"
                value={pet.skillthree ? pet.skillthree : ""}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="justify-content-center mt-4">
          {location.pathname === "/pets/new" ? (
            <Button variant="info" type="submit" className="w-50 text-white">
              Add Pet
            </Button>
          ) : (
            <Button variant="info" type="submit" className="w-50 text-white">
              Update
            </Button>
          )}
        </Row>
      </Form>
    </>
  );
};

export default PetForm;
