import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// CSS Files
import "./resources/css/animate.css";
import "./resources/css/flexslider.css";
import "./resources/fonts/icomoon/style.css";
import "./resources/css/bootstrap.css";
import "./resources/css/style.css";
//import 'https://fonts.googleapis.com/css?family=Nunito+Sans:200,300,400,700';
import "./resources/css/intlTelInput.css";
import "./resources/fonts/font-mfizz-2.4.1/dist/font-mfizz.css";

ReactDOM.render(
    <App />,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
