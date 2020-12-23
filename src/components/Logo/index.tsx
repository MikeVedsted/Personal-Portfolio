import React from "react";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";

const Logo = () => {
  return (
    <div className="SlideContainer">
      <LinkContainer to="/">
        <Nav.Link>
          <h1>
            <span className="SlideContainer__slide">
              MIKE
              <span className="NameDivider"> \ </span>
              VEDSTED
            </span>
          </h1>
        </Nav.Link>
      </LinkContainer>
    </div>
  );
};

export default Logo;
