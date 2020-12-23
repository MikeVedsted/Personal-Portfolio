import React from "react";

import { education } from "../../resources/text/";

const Education = () => {
  const { title, institution, text } = education;

  return (
    <section>
      <h2>{title.toUpperCase()}</h2>
      <ul>
        <li>
          <strong>{institution}</strong>
        </li>
        {text.map((paragraph, i) => (
          <li key={i}>{paragraph}</li>
        ))}
      </ul>
    </section>
  );
};

export default Education;
