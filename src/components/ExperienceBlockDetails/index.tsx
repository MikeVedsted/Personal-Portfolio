import React from "react";
import Container from "react-bootstrap/Container";
import Accordion from "react-bootstrap/Accordion";
import Badge from "react-bootstrap/Badge";

import { ExperienceDetailsProps } from "../../types";

const ExperienceBlockDetails = ({
  tags,
  description,
  responsibilities,
  type,
}: ExperienceDetailsProps) => {
  return (
    <Accordion>
      <Accordion.Toggle as={Container} eventKey="0" className="SlideContainer">
        <span className="SlideContainer__slide">More information</span>
      </Accordion.Toggle>
      <Accordion.Collapse eventKey="0">
        <div className="ExperienceInformation">
          <p>
            <strong>Keywords: </strong>
            {tags.map((tag) => (
              <Badge variant="light" key={tag}>
                {tag}
              </Badge>
            ))}
          </p>
          <p>{description}</p>
          {type === "Experience" && (
            <>
              <h5>Sample responsibilities</h5>
              <ul>
                {responsibilities?.map((responsibility, i) => (
                  <li key={i}>{responsibility}</li>
                ))}
              </ul>
            </>
          )}
        </div>
      </Accordion.Collapse>
    </Accordion>
  );
};

export default ExperienceBlockDetails;
