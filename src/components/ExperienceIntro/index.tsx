import React from "react";

import { experienceIntro } from "../../resources/text";

function ExperienceIntro() {
  return (
    <section>
      <h2>{experienceIntro.title.toUpperCase()}</h2>
      <p>{experienceIntro.text}</p>
    </section>
  );
}

export default ExperienceIntro;
