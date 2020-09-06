import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Profile from "./Components/Profile";
import * as serviceWorker from "./serviceWorker";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Education from "./Components/Education";
import Speaking from "./Components/Speaking";
import Mar from "./Components/mar";

ReactDOM.render(
  <React.StrictMode>
    <Profile />
    <About />
    <Experience />
    <Education />
    <Speaking />
    <Mar />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
