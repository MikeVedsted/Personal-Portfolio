import React from "react";
import Card from "react-bootstrap/Card";

import { StackGroupProps } from "../../types";

const StackGroup = ({ group }: StackGroupProps) => {
  const { name, technologies } = group;

  return (
    <section className="StackGroup">
      <Card bg="dark" className="StackGroup__Card">
        <Card.Header as="h4">{name.toUpperCase()}</Card.Header>
        <Card.Body>
          <ul>
            {technologies.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Card.Body>
      </Card>
    </section>
  );
};

export default StackGroup;
