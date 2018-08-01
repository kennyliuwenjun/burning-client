import React, {Component} from 'react';
import axios from 'axios';
import BAapi from '../utilities/BAapi'
import './FlightSearch.css';
import { Link } from 'react-router-dom';

class FlightSearch extends Component {
  constructor(props) {
    super(props);
    // get user info from props if available
    let user;
    if (props.location.state && props.location.state.referrer) {
      user = props.location.state.referrer;
    }

    this.state = {
      flights: [],
      user: !user ? null : user // store user info in state if available
    };

    this._handleSubmit = this._handleSubmit.bind(this);
    this.updateResults = this.updateResults.bind(this);
  }

  /// get the input values and perform the submit action //

  _handleSubmit(event) {
    event.preventDefault();
    //debugger;

    console.log(this.state.flights);
    const Search = {
      from: this.from.value,
      to: this.to.value

    }

    // call api to find flights here

    console.log(Search);
    const allFlights = new BAapi();
    allFlights.searchFlights(Search, this.updateResults)
  }

  updateResults(results) {
    this.setState({flights: results.data});
    //console.log(results)
  }
  /// creating the form for flights /
  render() {
    return (<div className="search__box">

      <form className="form" onSubmit={this._handleSubmit}>
        <input className="input block" type="Search" placeholder="Enter Origin City" ref={node => {
            this.from = node;
          }}/>

        <input className="input block" type="Search" placeholder="Enter Destination City" ref={node => {
            this.to = node;
          }}/>

        <button className="form__submit" type="submit">Search</button>

      </form>
      <ShowFlights flights={this.state.flights}/>
    </div>);
  }
}

/// show the flights after search //
class ShowFlights extends Component {

// map all flights and render by id
  render() {
    return (<div>{this.props.flights.map((f) => <FlightListing flight={f} key={f.id}/>)}</div>);
  }

}

class FlightListing extends Component {
// display selected flight/object data
  render() {
    const {flight_number, depart_dt, seats_left} = this.props.flight
    return (
      <div>
        <table>
          <thead>
            <tr>
               <th>Flight Number:</th>
               <th>Number of Seats:</th>
               <th>Depart Time:</th>
            </tr>
          </thead>

          <tbody>
            <tr>
             <td>{flight_number}</td>
             <td>{seats_left}</td>
             <td>{depart_dt}</td>
            </tr>
          </tbody>
        </table>
        <div className="button-container">
          <button className="booking"><Link to="#"></Link>Booking</button>
        </div>
      </div>

   )
  }
}

export default FlightSearch;
