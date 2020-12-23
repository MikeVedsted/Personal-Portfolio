import React from "react";

import ExperienceBlockDetails from "../ExperienceBlockDetails";
import { ExperienceProps } from "../../types";

const ExperienceBlock = ({ content }: ExperienceProps) => {
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
      {type === "Experience" && (
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
      )}
      <ExperienceBlockDetails
        tags={tags}
        description={description}
        responsibilities={responsibilities}
        type={type}
      />
    </section>
  );
};

export default ExperienceBlock;
