import React from "react";
import Col from "react-bootstrap/Col";

import Logo from "../Logo";
import NavButton from "../NavButton";
import { pageTitles } from "../../resources/text";

const NavDesktop = () => {
  return (
    <Col lg={5} xl={4}>
      <nav className="Navigation">
        <Logo />
        {pageTitles.map((title) => (
          <NavButton key={title} buttonText={title} />
        ))}
      </nav>
    </Col>
  );
};

export default NavDesktop;
