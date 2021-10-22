import { Link, useLocation } from "@reach/router";
import React from "react";
import { Col, Row } from "react-bootstrap";

const Header = () => {
  const location = useLocation();

  return (
    <>
      <Row className="mt-5">
        <Col>
          <h1>Pet Shelter</h1>
        </Col>
        <Col className="text-end">
          {location.pathname === "/" ? (
            <Link to="/pets/new" className="link-info">
              Add a pet to the shelter
            </Link>
          ) : (
            <Link to="/" className="link-info">
              Home
            </Link>
          )}
        </Col>
      </Row>
    </>
  );
};

export default Header;
