import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import BurningAirlines from './components/BurningAirlines';
import Booking from './components/Booking';
import FlightSearch from './components/FlightSearch'
import Login from './components/Login'
import SignUp from './components/SignUp'

const Routes = (
  // <Router basename={process.env.PUBLIC_URL}>
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={ BurningAirlines } />
        <Route path="/booking/:id" component={ Booking } />
        <Route path="/flight_search" component={ FlightSearch } />
        <Route path="/login" component={ Login } />
        <Route path="/signup" component={ SignUp } />
        <Route exact path="/*" component={BurningAirlines} />
      </Switch>
    </div>
  </Router>
);

export default Routes;
