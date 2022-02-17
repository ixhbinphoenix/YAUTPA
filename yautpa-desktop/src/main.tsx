import React from "react";
import ReactDOM from "react-dom";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import Components from "./pages/Components";
import Game from "./pages/Game";
import "./index.scss";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/components">
          <Components></Components>
        </Route>
        <Route path="/Game">
          <Game></Game>
        </Route>
        <Route path="/">
          <Home></Home>
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
