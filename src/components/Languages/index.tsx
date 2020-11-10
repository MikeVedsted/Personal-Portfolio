import React from "react";

import { languages } from "../../resources/text";

function Languages() {
  return (
    <section>
      <h2>{languages.title.toUpperCase()}</h2>
      {languages.languages.map((language) => (
        <ul key={language.language}>
          <li>{language.language}</li>
          <li className="separator">/</li>
          <li>{language.level}</li>
        </ul>
      ))}
    </section>
  );
}

export default Languages;
