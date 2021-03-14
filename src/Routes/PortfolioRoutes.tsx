import React from "react";
import { Switch, Route } from "react-router-dom";

import About from "../Portfolio/components/About";
import Stack from "../Portfolio/components/Stack";
import Projects from "../Portfolio/components/Projects";
import WorkExperience from "../Portfolio/components/WorkExperience";
import Leisure from "../Portfolio/components/Leisure";
import Contact from "../Portfolio/components/Contact";
import NotFound from "../Portfolio/components/NotFound";

export const PortfolioRoutes = () => (
  <Switch>
    <Route exact path="/About" component={About} />
    <Route exact path="/Stack" component={Stack} />
    <Route exact path="/Projects" component={Projects} />
    <Route exact path="/Work Experience" component={WorkExperience} />
    <Route exact path="/Leisure" component={Leisure} />
    <Route exact path="/Contact" component={Contact} />
    <Route path="/" component={NotFound} />
  </Switch>
);
