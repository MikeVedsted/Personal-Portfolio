import React from "react";
import Button from "react-bootstrap/Button";
import { Switch, Route } from "react-router-dom";

import Frontpage from "./components/Frontpage";
import NotFound from "../Portfolio/components/NotFound";
import { Page } from "./styles";

const Placeholder = () => {
  const goToPortofolio = () => {
    window.location.host = window.location.host.substring(5);
  };

  return (
    <Page>
      <h1>Welcome to my blog</h1>
      <p>I'm currently working on this part of of the site, so hang tight.</p>
      <p>
        <strong>While I've got you attention,</strong>
      </p>
      <p>
        I'm looking for a job in web development, so why don't you check out my
        portfolio? While you are there, you can also let me know if you have a
        subject in mind, you would like me to write about.
      </p>
      <Button
        onClick={goToPortofolio}
        variant="outline-light"
        className="NavButton"
      >
        Portfolio
      </Button>
    </Page>
  );
};

const Routes = () => (
  <Switch>
    <Route exact path="/work" component={Frontpage} />
    <Route exact path="/" component={Placeholder} />
    <Route path="/" component={NotFound} />
  </Switch>
);

export default Routes;
