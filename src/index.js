import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./components/loginpage/src/assets/css/app.css";
import "./components/loginpage/src/assets/css/bootstrap-grid.min.css";

import "./components/loginpage/src/assets/icons/boxicons-2/css/boxicons.min.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
