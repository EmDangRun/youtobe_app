import React from "react";
import ReactDOM from "react-dom";
import YoutobePage from "./pages/YoutobePage";
import { HomePage } from "./pages/HomePage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles.css";

ReactDOM.render(
  <Router>
    <Switch>
      <Route exac path="/:id" component={YoutobePage} />
      <Route exac path="/" component={HomePage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
