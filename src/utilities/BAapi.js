import axios from 'axios';

const SERVEL_URL = 'https://thawing-headland-81437.herokuapp.com';

class BAapi {
  getFlightInfo(id, callback) {
    axios.get(`${SERVEL_URL}/flights/${id}.json`).then( callback );
  };

  searchFlights(from, to) {
    //miseal
  };

  //remember to: import BAapi from '../utilities/BAapi'
  //in yout component
}

export default BAapi;
