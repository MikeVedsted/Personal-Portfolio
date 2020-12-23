import React from "react";

import { languages } from "../../resources/text";

function Languages() {
  return (
    <section>
      <h2>{languages.title.toUpperCase()}</h2>
      <ul>
        {languages.languages.map((language) => (
          <li>
            {language.language}
            <span className="separator">/</span>
            {language.level}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Languages;
