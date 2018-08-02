import React, {Component} from 'react';
import BAapi from '../utilities/BAapi'
import './FlightSearch.css';
import {Link} from 'react-router-dom';
import { PacmanLoader } from 'react-spinners';

class FlightSearch extends Component {
  constructor(props) {
    super(props);
    // get user info from props if available
    let user;
    if (props.location.state && props.location.state.referrer) {
      user = props.location.state.referrer;
    }

    this.state = {
      loading: false,
      airports: {
        from: [],
        to: []
      },
      flights: [],
      user: !user ? null: user // store user info in state if available
    };

    this._handleSubmit = this._handleSubmit.bind(this);
    this.updateResults = this.updateResults.bind(this);
    this.parseAirports = this.parseAirports.bind(this);


    this.getValidAirports();
  }

  parseAirports( response ) {
    const flights = response.data;
    const a = {
      from: [],
      to: []
    }

    flights.forEach( (f) => {
      if( !a.from.includes(f.from) ) a.from.push(f.from);
      if( !a.to.includes(f.to) ) a.to.push(f.to);
    });

    this.setState( { airports: a })

  }

  getValidAirports() {
    const api = new BAapi();
    api.getAllFlights(this.parseAirports);
  }

  // get the input values and perform the submit action
  _handleSubmit(event) {
    event.preventDefault();
    //debugger;

    console.log(this.state.flights);
    const Search = {
      from: this.from.value,
      to: this.to.value

    }

    // set loading state true
    this.setState({loading: true});
    // call api to find flights here
    console.log(Search);
    const allFlights = new BAapi();
    allFlights.searchFlights(Search, this.updateResults)
  }

  updateResults(results) {
    this.setState({flights: results.data, loading: false});
    //console.log(results)
  }

  optionForSelect( text, value ) {
    value = value ? value : text; //use text for value if not provided

    return (
      <option key={ value } value={ value }>{ text }</option>
    )
  }

  /// creating the form for flights /
  render() {

    return (


    <div className="search__box">
      <h1>Find your flight</h1>
      <form className="form" onSubmit={this._handleSubmit}>
        <select className="input block" ref={node => {this.from = node;}}  required >
          <option value="" >Select Origin City</option>
          {this.state.airports.from.map( (a) => this.optionForSelect(a) )}
        </select>

          <select className="input block" ref={node => { this.to = node; }} required >
          <option value="" >Select Destination City</option>
          {this.state.airports.to.map((a) => this.optionForSelect(a))}
        </select>

        <button className="form__submit" type="submit">Search</button>

      </form>
      <ShowFlights flights={this.state.flights} user={this.state.user} loading={this.state.loading}/>
    </div>);
  }
}

/// show the flights after search
class ShowFlights extends Component {

  // map all flights and render by id
  render() {
    if (this.props.flights.length > 0) {
     const user = this.props.user

      return (<div>
        <table>
          <thead>
            <tr>
              <th>Flight Number:</th>
              <th>Number of Seats:</th>
              <th>Depart Time:</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {this.props.flights.map((f) => <FlightListing flight={f} key={f.id} user={ user } />)}
          </tbody>
        </table>
      </div>);
    } else {
      return (

        <div className="loader-center">
           <PacmanLoader
           color={'#eb754a'}
           loading={this.props.loading}
           />
       </div>
    )
    }
  }

}

class FlightListing extends Component {
  // display selected flight/object data
  render() {
    const {flight_number, depart_dt, seats_left, id} = this.props.flight
    return (<tr>
      <td>{flight_number}</td>
      <td>{seats_left}</td>
      <td>{depart_dt}</td>
      <td>
        <div className="button-container">
          <Link to={ {pathname: '/booking/' + id, state: { referrer: this.props.user }} }><button className="booking">
            Booking</button></Link>
        </div>
      </td>
    </tr>)
  }
}

export default FlightSearch;
