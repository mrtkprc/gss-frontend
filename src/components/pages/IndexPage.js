import React, {Component} from 'react';
import {Route,  Switch } from 'react-router-dom'; //Link, NavLink, Redirect,
import GeriatricsPage from "./GeriatricsPage";
import ErrorPage from './ErrorPage';
import HomePage from "./HomePage";
import TopMenu from "../TopMenu";
import SurveilPage from "./SurveilPage";
import LoginForm from "../LoginForm";

class IndexPage extends Component {
    state = {};
    render() {

        return (
                <div>
                    <TopMenu/>
                    <Switch>
                        <Route path="/" exact component={HomePage} />
                        <Route path="/geriatric" exact component={GeriatricsPage} />
                        <Route path="/surveil" exact component={SurveilPage} />
                        <Route path="/login" exact component={LoginForm} />

                        <Route component={ErrorPage} />
                    </Switch>
                </div>
        );
    }
}

export default IndexPage;
