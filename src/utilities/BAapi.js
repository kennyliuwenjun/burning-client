import axios from 'axios';

const SERVER_URL = 'https://thawing-headland-81437.herokuapp.com';

class BAapi {
  //kenny
  getFlightInfo(id, callback) {
    axios.get(`${SERVER_URL}/flights/${id}.json`).then( callback );
  };

  //misael
  searchFlights(data, callback) {
    const search = SERVER_URL + "/flights/search"
    console.log('this shit is working')
    axios.post(search, data).then(callback)
  };

  //Time
  login(data, callback) {
    const loginURL = SERVER_URL + '/login.json'
    axios.post( loginURL, data ).then(callback);
  };

  //kenny
  addReservation(data, callback) {
    axios.post(SERVER_URL + "/reservations.json", data).then(callback)
  };

  //remember to: import BAapi from '../utilities/BAapi'
  //in yout component
}

export default BAapi;