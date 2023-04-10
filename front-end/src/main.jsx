import React from "react";
import ReactDOM from "react-dom/client";
import { Routes } from "./Routes";
import GlobalStyles from "./styles/global";

import { IndexContext } from "./hooks/context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <IndexContext>
      <GlobalStyles />
      <Routes />
    </IndexContext>
  </React.StrictMode>
);
