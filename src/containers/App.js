import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import GlobalStyles from 'ui_components/GlobalStyles';
import PopulationMaxMinContainer from 'containers/PopulationMaxMinContainer';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path="/" component={PopulationMaxMinContainer} />
            <Route exact path="/:year" component={PopulationMaxMinContainer} />
          </Switch>
        </Router>
        <GlobalStyles />
      </React.Fragment>
    );
  }
}

export default App;
