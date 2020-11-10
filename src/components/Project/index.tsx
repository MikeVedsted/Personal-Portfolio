import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";

import { ProjectProps } from "../../types";

function Project({ image, title, stack, description, buttons }: ProjectProps) {
  return (
    <section>
      <Row className="Project align-items-center">
        <Col xl={6}>
          <Image src={image} fluid />
          <ButtonGroup className="Project__Buttons">
            {buttons.map((button) => (
              <Button href={button.link} variant="outline-light">
                {button.name.toUpperCase()}
              </Button>
            ))}
          </ButtonGroup>
        </Col>
        <Col>
          <h4>{title}</h4>
          <p>
            <strong>Stack:</strong> {stack.map((tech) => tech + " ")}
          </p>
          <p>
            {description.map((line) => (
              <span>
                {line}
                <br />
              </span>
            ))}
          </p>
        </Col>
      </Row>
    </section>
  );
}

export default Project;
