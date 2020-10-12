import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Home from "./pages/home.js";
import Registry from "./pages/registry.js";
import Login from "./pages/login.js"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
const contenedor = document.getElementById("root");
ReactDOM.render(<Home />,contenedor);
ReactDOM.render(<Registry />, contenedor);
ReactDOM.render(<Login />, contenedor);

