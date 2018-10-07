import React from 'react';
import PropTypes from 'prop-types';

import StyledStateBreakdownTable from 'ui_components/StateBreakdownTable';

class StateBreakdownTable extends React.Component {
  static propTypes = {
    states: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired
  };

  renderStateRow(state) {
    return (
      <tr key={state.id}>
        <td>{state.state_name}</td>
        <td style={{ textAlign: 'right' }}>
          {state.population.toLocaleString()}
        </td>
      </tr>
    );
  }
  render() {
    const { states, title } = this.props;
    return (
      <StyledStateBreakdownTable>
        <tbody>
          <tr>
            <th style={{ textAlign: 'left' }}>{title}</th>
            <th style={{ textAlign: 'right' }}>Population</th>
          </tr>
          {states.map(state => this.renderStateRow(state))}
        </tbody>
      </StyledStateBreakdownTable>
    );
  }
}

export default StateBreakdownTable;
