import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import { GlobalStyle } from "./styles/global.js";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme.js";
import { ContextProvider } from "./Context/ContextStates";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </ContextProvider>
  </React.StrictMode>
);
