import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import AboutMe from "../AboutMe";
import Languages from "../Languages";
import Education from "../Education";
import Courses from "../Courses";

const About = () => {
  return (
    <Container>
      <AboutMe />
      <Education />
      <Row>
        <Col sm={6} md={4}>
          <Languages />
        </Col>
        <Col>
          <Courses />
        </Col>
      </Row>
    </Container>
  );
};

export default About;
