import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles.css";
// import "../styles/styles.scss";



import React from "react";
import ReactDOM from "react-dom";
import AppRouter from './routers/AppRouter';

ReactDOM.render(<h3>React App 2626</h3>, document.getElementById("root"));


var mountNode = document.getElementById("app");
ReactDOM.render(<App name="Jane" />, mountNode);