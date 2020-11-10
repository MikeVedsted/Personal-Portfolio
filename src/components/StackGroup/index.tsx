import React from "react";
import Card from "react-bootstrap/Card";

import { StackGroupProps } from "../../types";

function StackGroup({ group }: StackGroupProps) {
  return (
    <section className="StackGroup">
      <Card bg="dark" className="StackGroup__Card">
        <Card.Header as="h4">{group.name.toUpperCase()}</Card.Header>
        <Card.Body>
          <ul>
            {group.technologies.map((item) => (
              <li className="StackItem">{item}</li>
            ))}
          </ul>
        </Card.Body>
      </Card>
    </section>
  );
}

export default StackGroup;
