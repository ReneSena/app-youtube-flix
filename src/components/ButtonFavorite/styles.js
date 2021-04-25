import styled, { keyframes } from 'styled-components';

const animationScale = keyframes`
	0% {
		transform: scale(0.9);
	}
	50% {
		transform: scale(1.1);
	}
	100% {
		transform: scale(1);
	}
`;

export const Container = styled.button`
	display: flex;
	align-items: center;
	border: 0;
	background-color: transparent;
	outline-width: 2px;
	cursor: pointer;
	padding: 5px;
	border-radius: 50%;

	&:active,
	&:focus {
		background: rgba(231, 76, 60, 0.2);
	}

	& svg {
		&:active {
			animation: 1s ${animationScale} ease-in-out;
			animation-fill-mode: forwards;
		}
	}
`;
