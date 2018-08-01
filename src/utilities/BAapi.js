import axios from 'axios';

const SERVER_URL = 'https://thawing-headland-81437.herokuapp.com';

class BAapi {
  searchFlight(id) {
    //kenny
  };

  searchFlights(data, callback) {
    const search = SERVER_URL + "/flights/search"
    console.log('this shit is working')
    axios.post(search, data).then(callback)
  };

  //remember to: import BAapi from '../utilities/BAapi'
  //in yout component
}

export default BAapi;
