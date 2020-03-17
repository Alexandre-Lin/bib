import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route, Link
} from "react-router-dom";
import App from "../App";
import Quick from "../Quick/Quick";
import Better from"../Better/Better";
import './Home.css';

export default function Home() {
    return (
        <Router>
            <div>
                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/Quick">
                        <Quick/>
                    </Route>
                    <Route path="/Better">
                        <Better/>
                    </Route>
                    <Route path="/">
                        <App/>
                        <div class="Home-div">
                            <Link to="/Quick">
                                <button>First implementation</button>
                            </Link>
                            <Link to="/Better">
                                <button>Better implementation(in progress)</button>
                            </Link>
                        </div>
                    </Route>

                </Switch>
            </div>
        </Router>
    );
}

