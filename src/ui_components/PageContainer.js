import React from 'react';

import styled from 'styled-components';

const PageContainer = styled.div`
	@media (max-width: 768px) {
		width: 100%;
		padding: 1rem;
		margin-top: 2rem;
	}
	width: 800px;
	margin: auto;
	margin-top: 2rem;
	display: flex;
	height: 100vh;
	flex-direction: column;
	box-sizing: border-box;
`;

export default PageContainer;
