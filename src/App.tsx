import React from "react";
import ReactGA from "react-ga";
import { useHistory } from "react-router-dom";

import Portfolio from "./Portfolio";
import Blog from "./Blog";

const App = () => {
  const history = useHistory();
  let section = "portfolio";

  history.listen(() => {
    ReactGA.pageview(
      section + window.location.pathname + window.location.search
    );
  });

  if (window.location.host.split(".")[0].toLowerCase() === "blog") {
    section = "blog";
    return <Blog />;
  }

  return <Portfolio />;
};

export default App;
