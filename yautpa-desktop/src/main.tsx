import React from "react";
import ReactDOM from "react-dom";
import { Switch, Route, BrowserRouter as Router} from "react-router-dom";
import './index.scss'


ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Switch>
                <Route path="/">

                </Route>
            </Switch>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
)