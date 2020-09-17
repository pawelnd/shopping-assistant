import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { MemoryRouter } from "react-router";
import * as serviceWorker from "./serviceWorker";
import routes from "./routes";

ReactDOM.render(
  <React.StrictMode>
    <MemoryRouter>{routes}</MemoryRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
