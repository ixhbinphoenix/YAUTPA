import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Switch, Route, BrowserRouter as Router} from "react-router-dom";
import Home from "./pages/Home";
import './index.scss';

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Switch>
                <Route path="/">
                    <Home></Home>
                </Route>
            </Switch>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
)