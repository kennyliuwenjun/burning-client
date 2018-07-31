import React, { Component } from 'react';
import BAapi from '../utilities/BAapi'
import axios from 'axios';

function Square(props) {
  return (
    <button className="square" onClick={function(){
      console.log('hihi');
    }}>
    </button>
  );
}

class Booking extends Component {
  constructor(){
    super();
    this.state = {
      //testing data
      user: {
        id: 1,
        name: 'Bob',
      },
      flight: {
        id: 3,
        plane_id: 2,
        flight_number: '09',
        date: '3/8/13',
        from: 'JFK',
        to: 'SFO'
      },
      seats: [
        [false,false,false],
        [false,false,false],
        [false,false,false],
        [false,false,false]
      ]
    };

  }

  renderSquare(i) {
    return (
      <Square
        value={2}
        onClick={() => console.log(1)}
      />
    );
  }

  renderColumn(column){
    return (
      <div className="board-row">
        {column.map(Square)}
      </div>
    );
  }

  render() {
    return (
      <div>
        <div>
          <p>Search</p>
          <p>{this.state.user.name}</p>
        </div>

        <div>
          <p>BurningAirlines WDI28</p>
        </div>

        <div>
          {this.state.seats.map(this.renderColumn)}
        </div>
      </div>
    )
  }
}

export default Booking;
