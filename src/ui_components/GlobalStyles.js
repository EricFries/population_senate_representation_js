import { createGlobalStyle } from 'styled-components';

import { BLACK } from 'constants/colors';

const GlobalStyles = createGlobalStyle`
  body {
    color: ${BLACK};
    font-family: 'Oswald', sans-serif;
    font-weight: 400;
    margin: 0;
    padding: 0;
    font-size: 16px;
    background-color: #EEE;
  }
  p {
    text-align: center;
    margin: 0;
    margin-bottom: 1rem;
  }
  h1 {
    font-weight: 600;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 2rem;
    font-size: 2.5rem;
  }
  .VictoryContainer{
    text-align: center;
  }
  .VictoryContainer tspan{
    font-size: .75rem !important;
    font-family:  'Oswald', sans-serif !important;
  }
`;

export default GlobalStyles;
