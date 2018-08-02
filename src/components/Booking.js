//Kenny
import React, { Component } from 'react';
import BAapi from '../utilities/BAapi'


class Booking extends Component {
  constructor(props){
    super();

    // get user from session
    let user;
    if (props.location.state && props.location.state.referrer) {
      user = props.location.state.referrer;
    }

    this.state = {
      user: !user ? null : user, // store user info in state if available
      flight: {},
      seatsInRow: [],
      selectedSeat : {}
    };

    const api = new BAapi();
    const fetchFlight = () => {
      api.getFlightInfo(props.match.params.id,(results) => {
        const seatsInRow = new Array(results.data.rows);
        for (let i = 0; i < seatsInRow.length; i++) {
          seatsInRow[i] = new Array(results.data.columns);
          seatsInRow[i].fill(i);
        }
        this.setState({
          flight : results.data,
          seatsInRow,
        });
        setTimeout(fetchFlight, 2000);
      });
    }
    fetchFlight();

    api.getFlightInfo(props.match.params.id,(results) => {
      const seatsInRow = new Array(results.data.rows);
      for (let i = 0; i < seatsInRow.length; i++) {
        seatsInRow[i] = new Array(results.data.columns);
        seatsInRow[i].fill(i);
      }
      this.setState({
        flight : results.data,
        seatsInRow,
      });
    });
  }

  checkActiveBtn(column, row){
    return (column === this.state.selectedSeat.column && row === this.state.selectedSeat.row) ? "square selected" : "square";
  }

  seatName(columnIndex, rowIndex){
    return String.fromCharCode(65 + columnIndex)+(rowIndex+1);
  }

  _onSelectSeat(column, row){
    this.setState({
      selectedSeat:{
        column,
        row
      }
    });
  }

  getReservation(column, row){
    const ress = this.state.flight.reservations
    for (let i=0; i<ress.length; i++) {
      if (ress[i].column === column && ress[i].row === row){
        return ress[i];
      };
    }
    return false;
  }


  render() {
    return (
      <div>
        <div>
          <p>Search</p>
          <p>{ !this.state.user || this.state.user.name }</p>
        </div>

        <div>
          <p>Flight Number: {this.state.flight.flight_number}</p>
        </div>

        <div>
          {this.state.seatsInRow.map((row,rowIndex) => {
            return (
              <div key={rowIndex} className="board-row">
                {row.map((column, columnIndex) => {
                  const reservation = this.getReservation(columnIndex + 1, rowIndex + 1);
                  return (
                    <button title={ reservation.name || "Free Seat" }
                      key={columnIndex}
                      className = {this.checkActiveBtn(columnIndex+1, rowIndex+1)}
                      disabled={ !!reservation }
                      onClick={(e)=>{
                      this._onSelectSeat(columnIndex+1, rowIndex+1);
                    }}> {this.seatName(columnIndex, rowIndex)}
                    </button>
                  );
                })}
              </div>
            );
          })}
        </div>

        <div>
          <button onClick={() => {
              const api = new BAapi();
              const data = {
                 reservation: {
                    flight_id: this.state.flight.id,
                    user_id: this.state.user.id,
                    seat_row: this.state.selectedSeat.row,
                    seat_column: this.state.selectedSeat.column
                 }
              }
              api.addReservation(data);
          }}>Submit
          </button>
        </div>
      </div>
    )
  }
}

export default Booking;
