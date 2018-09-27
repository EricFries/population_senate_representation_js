import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { connect } from 'react-redux';
import PopulationMaxMinContainer from 'containers/PopulationMaxMinContainer';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={PopulationMaxMinContainer} />
          <Route exact path="/:year" component={PopulationMaxMinContainer} />
        </Switch>
      </Router>
    );
  }
}

export default connect()(App);
