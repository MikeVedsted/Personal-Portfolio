import React from "react";

import { aboutMe } from "../../resources/text/";

const AboutMe = () => {
  const { title, paragraphs } = aboutMe;
  
  return (
    <section>
      <h2>{title.toUpperCase()}</h2>
      <ul>
        {paragraphs.map((paragraph, i) => (
          <li key={i}>{paragraph}</li>
        ))}
      </ul>
    </section>
  );
};

export default AboutMe;
