import * as React from "react";
import * as ReactDOM from "react-dom";

import App from "./App";

module.hot?.accept();

var mountNode = document.getElementById("app");
ReactDOM.render(<App name="Janeea" />, mountNode);
