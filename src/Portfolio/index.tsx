import React from "react";
import { useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Routes from "./Routes";
import Navigation from "./components/Navigation";
import "./app.scss";

const Portfolio = () => {
  const location = useLocation();
  return (
    <Container fluid className="App">
      <Row className="fullHeight align-items-center">
        <Navigation />
        {location.pathname !== "/" && (
          <Col>
            <Routes />
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default Portfolio;
