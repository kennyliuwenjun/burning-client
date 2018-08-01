import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import BurningAirlines from './components/BurningAirlines';
import Booking from './components/Booking';
import FlightSearch from './components/FlightSearch'

const Routes = (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={ BurningAirlines } />
      <Route exact path="/booking/:id" component={ Booking } />
      <Route exact path="/flight_search" component={ FlightSearch } />
    </div>
  </BrowserRouter>
);

export default Routes;
