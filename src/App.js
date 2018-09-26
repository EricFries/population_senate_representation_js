import React from 'react';
import axios from 'axios';

import {
  STATES_ENDPOINT,
  HISTORICAL_POPULATIONS_ENDPOINT
} from './api/endpoints';

class App extends React.Component {
  componentDidMount() {
    this.fetchStates();
    this.fetchPopulations();
  }

  fetchStates() {
    axios.get(STATES_ENDPOINT).then(response => console.log(response));
  }

  fetchPopulations() {
    axios
      .get(HISTORICAL_POPULATIONS_ENDPOINT)
      .then(response => console.log(response));
  }

  render() {
    return <h1>hi</h1>;
  }
}

export default App;
