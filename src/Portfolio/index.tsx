import React from "react";
import { useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { BlogRoutes, PortfolioRoutes } from "./Portfolio/Routes";
import Navigation from "./Portfolio/components/Navigation";
import BlogNavigation from "./Portfolio/components/Navigation";
import "./app.scss";

const Portfolio = () => {
  return (
    <Container fluid className="App">
      <Row className="fullHeight align-items-center">
        <Navigation />
        {location.pathname !== "/" && (
          <Col>
            <PortfolioRoutes />
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default Portfolio;
