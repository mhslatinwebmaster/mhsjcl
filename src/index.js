import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main";
import { initSimpleImg } from "react-simple-img";
import ReactGA from "react-ga";
import 'bootstrap/dist/css/bootstrap.min.css';

initSimpleImg();
ReactGA.initialize("UA-127647033-1");

console.log("%cOh, well hello there. Dunno what you're trying to do here, but feel free to look around!", "color: blue; font-family: system-ui; font-size: large");

ReactDOM.render(
    <Main />,
    document.getElementById("root")
);