import React, {Component} from 'react';
import { BrowserRouter as Router, Route,  Switch } from 'react-router-dom'; //Link, NavLink, Redirect,
import GeriatricsPage from "./GeriatricsPage";
import ErrorPage from './ErrorPage';
import HomePage from "./HomePage";
import TopMenu from "../TopMenu";
import SurveilPage from "./SurveilPage";

class IndexPage extends Component {
    state = {};
    render() {
        return (
            <Router>
                <div>
                    <TopMenu/>
                    <Switch>
                        <Route path="/" exact component={HomePage} />
                        <Route path="/geriatric" exact component={GeriatricsPage} />
                        <Route path="/surveil" exact component={SurveilPage} />
                        <Route component={ErrorPage} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default IndexPage;
