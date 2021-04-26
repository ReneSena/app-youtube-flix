import React from 'react';
import { Container } from './styles';

function Footer() {
	const currentYear = new Date();

	return (
		<Container>
			Aperte o Play {currentYear.getFullYear()} - Todos os direitos
			reservados
		</Container>
	);
}

export default Footer;
