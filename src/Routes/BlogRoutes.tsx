import React from "react";
import { Switch, Route } from "react-router-dom";

import NotFound from "../components/NotFound";

export const BlogRoutes = () => (
  <Switch>
    <Route path="/" component={NotFound} />
  </Switch>
);
