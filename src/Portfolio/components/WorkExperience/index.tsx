import React from "react";
import Container from "react-bootstrap/Container";

import ExperienceIntro from "../ExperienceIntro";
import ExperienceBlock from "../ExperienceBlock";
import { experience } from "../../resources/text";

const WorkExperience = () => {
  return (
    <Container className="Scrollable text-center pt-3">
      <ExperienceIntro />
      <div className="pt-3">
        {experience.map((block) => (
          <div key={block.period}>
            <ExperienceBlock content={block} />
            <div className="ExperienceSeparator" />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default WorkExperience;
