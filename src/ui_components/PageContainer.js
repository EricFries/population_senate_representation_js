import React from 'react';

import styled from 'styled-components';

const PageContainer = styled.div`
	@media (max-width: 768px) {
		width: 100%;
		padding: 1rem;
	}
	width: 800px;
	margin: auto;
	display: flex;
	height: 100vh;
	flex-direction: column;
	justify-content: center;
	box-sizing: border-box;
`;

export default PageContainer;
