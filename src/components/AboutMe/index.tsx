import React from "react";

import { aboutMe } from "../../resources/text/";

function AboutMe() {
  return (
    <section>
      <h2>{aboutMe.title.toUpperCase()}</h2>
      <p>
        {aboutMe.paragraphs.map((paragraph, i) => (
          <span key={i}>
            {paragraph}
            <br />
          </span>
        ))}
      </p>
    </section>
  );
}

export default AboutMe;
