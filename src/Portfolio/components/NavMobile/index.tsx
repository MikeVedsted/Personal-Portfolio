import React, { useState } from "react";

import Logo from "../Logo";
import NavButton from "../NavButton";
import { pageTitles } from "../../resources/text";

const NavMobile = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="Navigation--mobile">
      <Logo />
      {menuOpen ? (
        <div style={{ width: "100%", paddingBottom: "20px" }}>
          {pageTitles.map((title) => (
            <NavButton
              key={title}
              buttonText={title}
              onClick={() => setMenuOpen(!menuOpen)}
            />
          ))}
        </div>
      ) : (
        <span
          onClick={() => setMenuOpen(!menuOpen)}
          className="Navigation__icon"
        >
          ≡
        </span>
      )}
    </div>
  );
};

export default NavMobile;
