import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Container, Main } from './styles';

function template({ children }) {
	return (
		<Container>
			<Header />
			<Main>{children}</Main>
			<Footer />
		</Container>
	);
}

export default template;
