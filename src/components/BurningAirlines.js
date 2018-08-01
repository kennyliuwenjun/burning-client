import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BurningAirlines extends Component {
  render() {
    return (
      <div>
        <h1>Home Page</h1>
        <div>
          <Link to="/flight_search">FlightSearch</Link>
        </div>
        <div>
          <Link to="/booking/2">Booking</Link>
        </div>
        <div>
          <Link to="/login">Booking</Link>
        </div>
        <div>
          <Link to="/signup">Booking</Link>
        </div>
      </div>
    );
  }
}

export default BurningAirlines;
