import React from "react";
import Container from "react-bootstrap/Container";
import Accordion from "react-bootstrap/Accordion";

import { ExperienceProps } from "../../types";

function ExperienceBlock({ content }: ExperienceProps) {
  const {
    title,
    period,
    company,
    location,
    type,
    flag,
    description,
    tags,
    responsibilities,
  } = content;

  return (
    <section className={type}>
      <h3>{title.toUpperCase()}</h3>
      <p>{period}</p>
      {type !== "Self-study" ? (
        <p>
          <span className="Experience__Company">{company}</span>
          <br />
          {location}
          <img
            className="Experience__Flag"
            src={flag}
            alt={`flag of ${location}`}
          />
        </p>
      ) : null}

      <Accordion>
        <Accordion.Toggle
          as={Container}
          eventKey="0"
          className="SlideContainer"
        >
          <span className="SlideContainer__slide">More information</span>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <div className="ExperienceInformation">
            <p>
              <strong>Keywords: </strong>
              {tags.map((tag) => tag + " ")}
            </p>
            <p>{description}</p>
            {type === "Experience" ? (
              <>
                <h5>Sample responsibilities</h5>
                <ul>
                  {responsibilities?.map((responsibility, i) => (
                    <li key={i}>{responsibility}</li>
                  ))}
                </ul>
              </>
            ) : null}
          </div>
        </Accordion.Collapse>
      </Accordion>
    </section>
  );
}

export default ExperienceBlock;
