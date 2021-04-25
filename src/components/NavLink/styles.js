import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
	transition: all 0.3s ease-in-out;

	&:hover,
	&:focus {
		opacity: 0.5;
	}
`;
