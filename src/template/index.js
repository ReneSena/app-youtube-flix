import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Main } from './styles';

function template({ children }) {
	return (
		<>
			<Header />
			<Main>{children}</Main>
			<Footer />
		</>
	);
}

export default template;
