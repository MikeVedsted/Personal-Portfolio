import React from "react";

import { languages } from "../../resources/text";

const Languages = () => {
  return (
    <section>
      <h2>{languages.title.toUpperCase()}</h2>
      <ul>
        {languages.languages.map((language) => (
          <li key={language.language}>
            {language.language}
            <span className="Separator">/</span>
            {language.level}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Languages;
