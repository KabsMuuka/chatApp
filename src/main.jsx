import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import Register from "../components/Register";
import Login from "../components/Login";
import Home from "../components/Home";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Register />
    <Login />
    <Home />
  </React.StrictMode>
);
