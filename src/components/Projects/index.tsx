import React from "react";
import Container from "react-bootstrap/esm/Container";

import { projectsList } from "../../resources/text";
import Project from "../Project";

const Projects = () => {
  return (
    <Container className="Scrollable pt-3">
      {projectsList.map((project) => (
        <Project
          image={project.image}
          title={project.title}
          stack={project.stack}
          description={project.description}
          buttons={project.buttons}
          key={project.title}
        />
      ))}
    </Container>
  );
};

export default Projects;
