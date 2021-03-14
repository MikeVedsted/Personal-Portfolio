import React from "react";

import Portfolio from "./Portfolio";
import Blog from "./Blog";

const App = () => {
  if (window.location.host.split(".")[0].toLowerCase() === "blog") {
    return <Blog />;
  }

  return <Portfolio />;
};

export default App;
