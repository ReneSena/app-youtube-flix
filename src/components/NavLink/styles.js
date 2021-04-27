import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
	transition: all 0.3s ease-in-out;
	color: ${({ theme }) => theme.colors.yellow};

	${props =>
		props.active &&
		css`
			border-bottom: 2px solid ${({ theme }) => theme.colors.white};
		`}

	&:hover,
	&:focus {
		opacity: 0.5;
	}
`;
