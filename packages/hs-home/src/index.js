import React from "react";
import ReactDOM from "react-dom/client";
import "./index.less";
import App from "./App";
import { business } from "requests-sdk";
import "./i18n";

// Inject Business
const { hs } = business;

globalThis.$hs = hs;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
