import "./public-path";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.less";
import App from "./App";
import "./i18n";
import { hascheck, observerLint } from "./utils/index.js";

observerLint();
hascheck();

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
