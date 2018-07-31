import React, { Component } from 'react';

class Booking extends Component {


  fetchData(){
    //do a axios request, fetch data from back end in json format
    //do some processs convert the json data to 'state' by doing this.setState(bla bla)
  }

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
        [false,false,false]
      ]
    };
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
          {this.state.seats.map( function (column){
            column.map(row => <p>{ 'avaliable' }</p> )
          })}
        </div>
      </div>
    )
  }
}

export default Booking;
