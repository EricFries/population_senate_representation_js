import React from 'react';

import styled from 'styled-components';

const StateBreakdownTable = styled.table`
	@media (max-width: 768px) {
		width: 100%;
		padding: 0;
		margin-top: 1rem;
		:first-of-type {
			margin-top: 0;
		}
	}
	width: 50%;
	padding: 1rem;
	box-sizing: border-box;
`;

export default StateBreakdownTable;
