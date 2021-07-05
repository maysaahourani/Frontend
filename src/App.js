import React from 'react';
import Header from './Header';
import IsLoadingAndError from './IsLoadingAndError';
import Footer from './Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { withAuth0 } from '@auth0/auth0-react';
import LoginButton from './components/LoginButton';
import BrowserRouter from './components/BrowserRouter';
// import Profile from './components/Profile';
// import LogoutButton from './components/LogoutButton'
import BestBooks from './BestBooks'

class App extends React.Component {

  render() {
    console.log('app', this.props);
    return(
      <>
        <Router>
          <IsLoadingAndError>
            <Header />
            <Switch>
              <Route exact path="/">
                {/* TODO: if the user is logged in, render the `BestBooks` component, if they are not, render the `Login` component */}
                {
              this.props.auth0.isAuthenticated ?
                 < BestBooks />:
                 <LoginButton/>            
              

               }
              </Route>
              {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
              <BrowserRouter/>
            </Switch>
            <Footer />
          </IsLoadingAndError>
        </Router>
      </>
    );
  }
}

export default  withAuth0(App);
