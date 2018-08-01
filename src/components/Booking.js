import React, { Component } from 'react';
import BAapi from '../utilities/BAapi'


class Booking extends Component {
  constructor(props){
    super();
    this.state = {
      //testing data
      user: {
        id: 1,
        name: 'Bob',
      },
      flight: {},
      seatsInRow: [],
      selectedSeat : ""
    };

    const api = new BAapi();
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

  checkActiveBtn(btn){
    return (btn == this.state.selectedSeat) ? "square selected" : "square";
  }

  seatName(columnIndex, rowIndex){
    return String.fromCharCode(65 + columnIndex)+(rowIndex+1);
  }

  _onSelectSeat(e){
    this.setState({
      selectedSeat : e,
    });
  }


  render() {
    return (
      <div>
        <div>
          <p>Search</p>
          <p>{this.state.user.name}</p>
        </div>

        <div>
          <p>Flight Number: {this.state.flight.flight_number}</p>
        </div>

        <div>
          {this.state.seatsInRow.map((row,rowIndex) => {
            return (
              <div key={rowIndex} className="board-row">
                {row.map((column,columnIndex) => {
                  return (
                    <button key={columnIndex} className = {this.checkActiveBtn(this.seatName(columnIndex, rowIndex))} onClick={(e)=>{
                      this._onSelectSeat(this.seatName(columnIndex, rowIndex));
                    }}> {this.seatName(columnIndex, rowIndex)}
                    </button>
                  );
                })}
              </div>
            );
          })}
        </div>

        <div>
          <button onClick={function(){
            console.log('do submit api request');
          }}>Submit
          </button>
        </div>
      </div>
    )
  }
}

export default Booking;
