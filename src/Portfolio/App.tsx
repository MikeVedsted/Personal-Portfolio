import React from "react";
import { useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { BlogRoutes, PortfolioRoutes } from "../Routes";
import Navigation from "./components/Navigation";
import "./app.scss";

const App = () => {
  const location = useLocation();
  if (window.location.host.split(".")[0].toLowerCase() === "blog") {
    return <BlogRoutes />;
  }

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

export default App;
