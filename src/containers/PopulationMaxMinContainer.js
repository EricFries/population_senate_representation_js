import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Pulse } from 'styled-spinkit';

import { DARK_BLUE } from 'constants/colors';
import { fetchHistoricalPopulationsMaxMin } from 'actions/historicalPopulations';
import PageContainer from 'ui_components/PageContainer';
import InfoContainer from 'ui_components/InfoContainer';
import SenatePopulationStackedChart from 'components/SenatePopulationStackedChart';

const YEARS = [1990, 1980, 1970, 1960, 1950, 1940, 1930, 1920, 1910, 1900];

class PopulationMaxMinContainer extends React.Component {
  static propTypes = {
    year: PropTypes.string.isRequired,
    isFetching: PropTypes.bool.isRequired,
    maxStates: PropTypes.array.isRequired,
    minStates: PropTypes.array.isRequired,
    maxStatesPercentage: PropTypes.number,
    minStatesPercentage: PropTypes.number,
    lastFetched: PropTypes.number,
    dispatch: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired
  };

  componentDidMount() {
    // this.fetchStates();
    this.fetchPopulations();
  }

  componentDidUpdate(prevProps) {
    if (this.props.year !== prevProps.year) {
      this.fetchPopulations();
    }
  }

  // fetchStates() {
  //   axios.get(STATES_ENDPOINT).then(response => console.log(response));
  // }

  fetchPopulations() {
    const { dispatch, year } = this.props;
    const queryParams = { year };
    return dispatch(fetchHistoricalPopulationsMaxMin(queryParams));
  }

  readyToRender() {
    return !this.props.isFetching && this.props.lastFetched;
  }

  handleYearChange = e => {
    const year = e.target.value;
    this.props.history.push(`/${year}`);
  };

  render() {
    const { minStatesPercentage, maxStatesPercentage, year } = this.props;
    return (
      <PageContainer>
        {this.readyToRender() ? (
          <React.Fragment>
            <InfoContainer>
              <h1>The US Senate Isn&apos;t Representative of America.</h1>
              <div>
                <p>
                  {`In fact, in ${year}, ${minStatesPercentage}% of the US Population resided in states
                        that sent 50 Senators to Congress.`}
                </p>
                <p>
                  {`In other words, ${maxStatesPercentage}% of the US Population resided in states that
                                    sent just 50 Senators to Congress.`}
                </p>
              </div>
              <div>
                <SenatePopulationStackedChart
                  populationOne={minStatesPercentage}
                  populationTwo={maxStatesPercentage}
                />
              </div>
              <div style={{ textAlign: 'center' }}>
                <label htmlFor="year">Explore Other Years: </label>
                <select
                  value={year}
                  onChange={this.handleYearChange}
                  id="year"
                  name="year"
                >
                  {YEARS.map(year => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
            </InfoContainer>
          </React.Fragment>
        ) : (
          <Pulse color={DARK_BLUE} />
        )}
      </PageContainer>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    // Use 1990 when on the root.
    year: ownProps.match.params.year || '1990',
    isFetching: state.historicalPopulations.isFetching,
    maxStates: state.historicalPopulations.maxStates,
    minStates: state.historicalPopulations.minStates,
    maxStatesPercentage: state.historicalPopulations.maxStatesPercentage,
    minStatesPercentage: state.historicalPopulations.minStatesPercentage,
    lastFetched: state.historicalPopulations.lastFetched
  };
}
export default connect(mapStateToProps)(PopulationMaxMinContainer);
