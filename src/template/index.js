import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Box = styled.main`
	margin: 100px 20px 40px 20px;

	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;

function template({ children }) {
	return (
		<>
			<Header />
			<Box>{children}</Box>
			<Footer />
		</>
	);
}

export default template;
