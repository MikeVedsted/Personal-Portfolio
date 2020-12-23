import React from "react";

import { experienceIntro } from "../../resources/text";

const ExperienceIntro = () => {
  const { title, text } = experienceIntro;

  return (
    <section>
      <h2>{title.toUpperCase()}</h2>
      <p>{text}</p>
    </section>
  );
};

export default ExperienceIntro;
