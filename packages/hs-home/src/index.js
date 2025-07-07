import "./public-path";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.less";
import App from "./App";
import "./i18n";
import { observerLint } from "./utils/index.js";

observerLint();

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
