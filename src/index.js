import React from "react";
import ReactDOM from "react-dom";
<<<<<<< HEAD
import "./index.css";
import App from "./App.jsx";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
=======
import "./style/app.scss";
import Home from "./Home";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<Home />, document.getElementById("root"));
>>>>>>> added the date format functionality and styling

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
