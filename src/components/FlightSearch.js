import React, {Component} from 'react';
import axios from 'axios';
import './FlightSearch.css';

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
    // this._handleSubmit = this._handleSubmit.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);

  }

  // _handleInput(event) {
  //   this.setState({flights: event.target.value});
  // }

  componentDidMount() {

    const flightString = this.setState({searchString: flightString});
  }

  _handleSubmit(event) {
    event.preventDefault();
    //debugger;
    // this.props.onSubmit(this.state.flights);

    console.log(this.state.flights);
    const Search = {
      originCity: this.originCity.value,
      destinationCity: this.destinationCity.value

    }

    // call api to find flights here
    console.log(Search);

  }
  render() {
    return (<div className="search__box">

      <form className="form" onSubmit={this._handleSubmit}>
        <input className="input block" type="Search" placeholder="Enter Origin City" ref={node => {
            this.originCity = node;
          }}/>

        <input className="input block" type="Search" placeholder="Enter Destination City" ref={node => {
            this.destinationCity = node;
          }}/>

        <button className="form__submit" type="submit">Search</button>

      </form>
      <ShowFlights flights={this.state.flights} />
    </div>);
  }
}

class ShowFlights extends Component {

  render() {
    return (<div>{this.props.flights.map((f)=> <div>{f.flight_number}</div>)}</div>);
  }

}

export default FlightSearch;
