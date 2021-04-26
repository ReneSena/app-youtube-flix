import React from 'react';
import { Container } from './styles';

function Footer() {
	const currentYear = new Date();

	return (
		<Container>
			<p>
				Aperte o Play {currentYear.getFullYear()} - Entreterimento
				garantido
			</p>
		</Container>
	);
}

export default Footer;
