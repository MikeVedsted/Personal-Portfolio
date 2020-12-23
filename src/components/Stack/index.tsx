import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";

import StackGroup from "../StackGroup";
import { stack } from "../../resources/text";

const Stack = () => {
  return (
    <Container className="Scrollable pt-5">
      <Row xs={1} sm={2}>
        {stack.map((group) => (
          <StackGroup group={group} key={group.name} />
        ))}
      </Row>
    </Container>
  );
};

export default Stack;
