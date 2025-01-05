import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "@master/css";
import "@master/keyframes.css";

import "./assets/scss/index.scss";

import "./i18n";

import { App } from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
