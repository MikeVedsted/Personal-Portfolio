import React from "react";
import { Switch, Route } from "react-router-dom";

import NotFound from "../components/NotFound";


const Placeholder = () => {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>Welcome to my blog</h1>
      <p>I'm currently working on this part of of the site, so hang tight.</p>
      <p>
        Meanwhile, I'm looking for a job in web development, so why don't you
        check out my portfolio?
      </p>
      <p>
        Have something you think I should write about? Let me know through the
        contact form!
      </p>
    </div>
  );
};

export const BlogRoutes = () => (
  <Switch>
    <Route exact path="/" component={Placeholder} />
    <Route path="/" component={NotFound} />
  </Switch>
);
