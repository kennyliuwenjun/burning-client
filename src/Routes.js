import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import BurningAirlines from './components/BurningAirlines';
import Booking from './components/Booking';
import FlightSearch from './components/FlightSearch'
import Login from './components/Login'
import SignUp from './components/SignUp'

const Routes = (
  <BrowserRouter>
    <div>
      <Route exact path={process.env.PUBLIC_URL + '/'} component={ BurningAirlines } />
      <Route exact path={process.env.PUBLIC_URL + '/booking/:id'} component={ Booking } />
      <Route exact path={process.env.PUBLIC_URL + '/flight_search'} component={ FlightSearch } />
      <Route exact path={process.env.PUBLIC_URL + '/login'} component={ Login } />
      <Route exact path={process.env.PUBLIC_URL + '/signup'} component={ SignUp } />
    </div>
  </BrowserRouter>
);

export default Routes;
