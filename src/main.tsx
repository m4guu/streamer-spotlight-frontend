import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { ThemeConfig } from "./styles/theme";

import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeConfig>
        <App />
      </ThemeConfig>
    </BrowserRouter>
  </React.StrictMode>
);
