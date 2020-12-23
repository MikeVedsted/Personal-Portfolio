import React from "react";
import { useLocation } from "react-router-dom";
import Col from "react-bootstrap/Col";

import Logo from "../Logo";
import NavButton from "../NavButton";
import NavDesktop from "../NavDesktop";
import NavMobile from "../NavMobile";
import { pageTitles } from "../../resources/text";

const Navigation = () => {
  const location = useLocation();

  const onContentPage = () => {
    if (window.innerWidth > 1091) {
      return <NavDesktop />;
    } else {
      return <NavMobile />;
    }
  };

  return (
    <>
      {location.pathname === "/" ? (
        <Col>
          <nav className="Navigation">
            <Logo />
            {pageTitles.map((title) => (
              <NavButton key={title} buttonText={title} />
            ))}
          </nav>
        </Col>
      ) : (
        onContentPage()
      )}
    </>
  );
};

export default Navigation;
