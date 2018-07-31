import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

import './FlightSearch.css';

class FlightSearch  extends Component {
  constructor(props) {
    super(props);

    this.state = {
      returnTrip: true,
      departureDate: moment(),
      returnDate: moment().add(1, 'day'),
      passengers: 1
    }
  }
  handleTrip(tab) {
      let returnTrip = (tab === 1) ? false : true;
      this.setState({returnTrip});
    }

    changeDepartureDate(departureDate) {
      this.setState({departureDate: moment(departureDate._d)});
    }

    changeReturnDate(returnDate) {
      this.setState({returnDate: moment(returnDate._d)});
    }

    incrementPassengers() {
      this.setState({
        passengers: this.state.passengers + 1
      });
    }

    decrementPassengers() {
      if (this.state.passengers > 0) {
        this.setState({
          passengers: this.state.passengers - 1
        });
      }
    }

    handleSearch(event) {
      const { store } = this.context;
      store.dispatch({
        type: 'ALL',
        returnTrip: this.state.returnTrip,
        originCity: this.originCity.value,
        destinationCity: this.destinationCity.value,
        departureDate: this.state.departureDate,
        returnDate: this.state.returnDate,
        passengers: this.state.passengers,
        // price: this.state.price
      });
      event.preventDefault();
    }
  render() {
    return (
      <div className="search__box">
        <ul className="tabs">
          <li className={"tab" + (this.state.returnTrip ? '' : ' active')}
            onClick={this.handleTrip.bind(this, 1)}>One way</li>
          <li className={"tab" + (this.state.returnTrip ? ' active' : '')}
            onClick={this.handleTrip.bind(this, 2)}>Return</li>
        </ul>

        <form className="form" onSubmit={this.handleSearch.bind(this)}>
          <input
            className="input block"
            type="text"
            placeholder="Enter Origin City"
            ref={node => {
              this.originCity = node;
            }} />

          <input
            className="input block"
            type="text"
            placeholder="Enter Destination City"
            ref={node => {
              this.destinationCity = node;
            }} />

            <br />
            <br />
          <div>
            <label className="block">Departure date</label>
            <DatePicker
              className="input"
              selected={this.state.departureDate}
              onChange={this.changeDepartureDate.bind(this)} />
          </div>

          <br />

          { this.state.returnTrip &&
          <div>
            <label className="block">Return date</label>
            <DatePicker
              className="input"
              selected={this.state.returnDate}
              onChange={this.changeReturnDate.bind(this)} />
            </div>
          }

          <div className="passengers">
            <span className="passenger__count">{this.state.passengers} passenger</span>

            <button
              type="button"
              className="button"
              onClick={this.decrementPassengers.bind(this)}>
              -
            </button>

            <button
              type="button"
              className="button"
              onClick={this.incrementPassengers.bind(this)}>
              +
            </button>
          </div>

          <button className="form__submit" type="submit">Search</button>

        </form>

      </div>
    );
  }
}

export default FlightSearch;
