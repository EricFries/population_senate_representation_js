import React from 'react';
import PropTypes from 'prop-types';

import StateBreakdownTable from 'components/StateBreakdownTable';
import StyledStateBreakdown from 'ui_components/StateBreakdown';
import TextButton from 'ui_components/TextButton';

class StateBreakdownContainer extends React.Component {
  static propTypes = {
    minStates: PropTypes.array.isRequired,
    maxStates: PropTypes.array.isRequired
  };

  state = {
    displayStateBreakdown: true
  };

  toggleDisplayStateBreakdown = () => {
    this.setState({
      displayStateBreakdown: !this.state.displayStateBreakdown
    });
  };

  render() {
    const { minStates, maxStates } = this.props;
    const { displayStateBreakdown } = this.state;
    return (
      <React.Fragment>
        {displayStateBreakdown && (
          <StyledStateBreakdown>
            <StateBreakdownTable
              title="25 Least Populous States"
              states={minStates}
            />
            <StateBreakdownTable
              title="25 Most Populous States"
              states={maxStates}
            />
          </StyledStateBreakdown>
        )}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <TextButton onClick={this.toggleDisplayStateBreakdown}>
            {displayStateBreakdown ? 'Hide' : 'Show'} State Breakdown
          </TextButton>
        </div>
      </React.Fragment>
    );
  }
}

export default StateBreakdownContainer;
