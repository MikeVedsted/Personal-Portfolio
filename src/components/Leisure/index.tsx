import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Hobby from "../Hobby";
import { hobbies } from "../../resources/text";

const Leisure = () => {
  return (
    <Container className="Scrollable">
      <Row noGutters xs={1} md={2} lg={1} xl={2}>
        {hobbies.map((hobby) => (
          <Col key={hobby.title}>
            <Hobby hobby={hobby} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Leisure;
