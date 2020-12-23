import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

import ContactForm from "../ContactForm";
import Social from "../Social";

const Contact = () => {
  return (
    <Container>
      <Col lg={{ span: 8, offset: 2 }}>
        <h2>Contact me</h2>
        <p>
          I'll be happy to answer any questions you might have.
          <br />
          Fill out the form below and I'll get in touch ASAP!
        </p>
        <ContactForm />
        <Social />
      </Col>
    </Container>
  );
};

export default Contact;
