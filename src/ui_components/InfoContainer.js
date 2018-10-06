import React from 'react';

import styled from 'styled-components';

const InfoContainer = styled.div`
	@media (max-width: 768px) {
		flex-direction: column;
	}
	display: flex;
	flex-direction: column;
	justify-content: center;
	min-height: 50vh;
`;

export default InfoContainer;
