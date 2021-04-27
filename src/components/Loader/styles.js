import styled, { keyframes } from 'styled-components';

const slow = keyframes`
  0% {
    stroke-dashoffset: 800;
    opacity: 0.8;
  }
  100% {
    stroke-dashoffset: 0;
    opacity: 0.1;
}

`;

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 40vh;

	& svg .loader {
		stroke-dasharray: 600;
		stroke-dashoffset: 1000;
		animation: 2s ${slow} ease-out infinite;
		animation-fill-mode: backwards;
		fill: ${({ theme }) => theme.colors.gray100};
	}
`;
