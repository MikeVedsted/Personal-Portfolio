import React from "react";

import Github from "../../resources/icons/github.svg";
import Linkedin from "../../resources/icons/linkedin.svg";
import Envelope from "../../resources/icons/envelope.svg";
import Phone from "../../resources/icons/phone.svg";

function Social() {
  return (
    <p>
      <a href="https://github.com/MikeVedsted" target="_blank">
        <img
          src={Github}
          aria-label="see my profile on Github"
          alt="Github"
          className="Icon"
        />
      </a>
      <a href="https://www.linkedin.com/in/mikevedsted/" target="_blank">
        <img
          src={Linkedin}
          aria-label="see my profile on Linkedin"
          alt="LinkedIn"
          className="Icon"
        />
      </a>
      <a href="mailto:mikevedsted@gmail.com">
        <img
          src={Envelope}
          aria-label="write me an email"
          alt="Email"
          className="Icon"
        />
      </a>
      <img
        src={Phone}
        aria-label="Call me"
        alt="Phone"
        className="Icon"
        onClick={() =>
          alert(
            "I prefer email but I am of course open to calls. \nMy number is (+358) 045 787 112 14"
          )
        }
      />
    </p>
  );
}

export default Social;
