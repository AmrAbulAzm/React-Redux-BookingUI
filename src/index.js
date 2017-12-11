import React from "react";
import ReactDOM from "react-dom";

import initStore from "./store";
import App from "./containers/App";

import "./styles";

const store = initStore();

ReactDOM.render(<App store={store} />, document.getElementById("root"));

if (module.hot) {
  module.hot.accept("./containers/App", () => {
    const NextApp = require("./containers/App").default;
    ReactDOM.render(<NextApp store={store} />, document.getElementById("root"));
  });
}

