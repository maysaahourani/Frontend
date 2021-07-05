import React, { Component } from 'react'
import { withAuth0 } from '@auth0/auth0-react';
// import { Router } from 'react-router-dom';
import BestBooks from '../BestBooks';
import LoginButton from './LoginButton';
import Profile from'../components/Profile';



import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link

} from "react-router-dom";

class browserRouter extends Component {
    render() {
        return (
            <>
                <Router>
                    <Link to="/">Home</Link>
                    <Link to="/profile">Profile</Link>
                </Router>
                <Switch>
                    <Route exact path='/'>
                        {
                            this.props.auth0.isAuthenticated ?
                            <BestBooks/>
                            : <LoginButton/>
                        }
                    </Route>
                    <Route exact path='/Profile'>
                        <Profile/>
                        </Route>
                </Switch>
            </>
        )
    }
}

export default withAuth0(browserRouter)
