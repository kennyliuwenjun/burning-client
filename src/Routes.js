import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import BurningAirlines from './components/BurningAirlines';
import Booking from './components/Booking';
import FlightSearch from './components/FlightSearch'
import Login from './components/Login'
import SignUp from './components/SignUp'

const Routes = (
  <BrowserRouter basename="https://kennyliuwenjun.github.io/burning-client">
    <div>
      <Route exact path="/" component={ BurningAirlines } />
      <Route exact path="/booking/:id" component={ Booking } />
      <Route exact path="/flight_search" component={ FlightSearch } />
      <Route exact path="/login" component={ Login } />
      <Route exact path="/signup" component={ SignUp } />
    </div>
  </BrowserRouter>
);

export default Routes;
