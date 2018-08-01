import axios from 'axios';

// const SERVER_URL = 'https://thawing-headland-81437.herokuapp.com';
const SERVER_URL = 'http://localhost:3001';
class BAapi {
  searchFlight(id) {
    //kenny
  };

  searchFlights(from, to) {
    //miseal
  };

  login(data, callback) {
    const loginURL = SERVER_URL + '/login.json'
    axios.post( loginURL, data ).then(callback);
  }

  //remember to: import BAapi from '../utilities/BAapi'
  //in yout component
}

export default BAapi;
