import React from "react";

import { education } from "../../resources/text/";

function Education() {
  return (
    <section>
      <h2>{education.title.toUpperCase()}</h2>
      <p>
        <strong>{education.institution}</strong>
      </p>
      <p>
        {education.text.map((paragraph, i) => (
          <span key={i}>
            {paragraph} <br />
          </span>
        ))}
      </p>
    </section>
  );
}

export default Education;
