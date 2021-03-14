import React from "react";

import Navigation from "./components/Navigation";
import Routes from "./Routes";
import { Page } from "./styles";

const Blog = () => {
  return (
    <Page>
      <Navigation />
      <Routes />
    </Page>
  );
};

export default Blog;
