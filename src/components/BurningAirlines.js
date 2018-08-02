import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BurningAirlines extends Component {
  render() {
    return (
      <div className="nav">
        <div>
          <h1>Burning Airlines</h1>
          <h2>Where prices crash and burn!</h2>
        </div>
        <nav>
          <Link to="/flight_search">FlightSearch</Link>
          <Link to="/booking/2">Booking</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </nav>
      </div>
    );
  }
}

export default BurningAirlines;
