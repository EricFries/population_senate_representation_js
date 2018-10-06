import React from 'react';
import PropTypes from 'prop-types';

import {
  VictoryChart,
  VictoryLabel,
  VictoryBar,
  VictoryVoronoiContainer
} from 'victory';

import { DARK_BLUE, RED } from 'constants/colors';

class SenatePopulationStackedChart extends React.Component {
  static propTypes = {
    populationOne: PropTypes.number.isRequired,
    populationTwo: PropTypes.number.isRequired
  };
  render() {
    const { populationOne, populationTwo } = this.props;
    return (
      <VictoryChart
        title="Population / Senate Representation"
        animate={{
          duration: 750,
          onLoad: { duration: 200 }
        }}
        domainPadding={50}
        containerComponent={<VictoryVoronoiContainer labels={d => `${d.y}%`} />}
      >
        <VictoryLabel
          x={225}
          y={24}
          textAnchor={'middle'}
          style={{
            title: {
              verticalAnchor: 'end',
              fontFamily: 'inherit'
            }
          }}
          text="Percentage of U.S. Population"
        />
        <VictoryBar
          barWidth={50}
          style={{ data: { fill: RED } }}
          data={[
            {
              x: '25 Least Populous States',
              y: populationOne
            }
          ]}
        />
        <VictoryBar
          barWidth={50}
          style={{ data: { fill: DARK_BLUE } }}
          data={[
            {
              x: '25 Most Populous States',
              y: populationTwo
            }
          ]}
        />
      </VictoryChart>
    );
  }
}

export default SenatePopulationStackedChart;
