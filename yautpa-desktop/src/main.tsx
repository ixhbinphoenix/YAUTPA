import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Switch, Route, BrowserRouter as Router} from "react-router-dom";
import './index.scss'
import './pages/Home';
import Home from "./pages/Home";

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