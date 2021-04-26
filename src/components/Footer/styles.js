import styled from 'styled-components';

export const Container = styled.footer`
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 0.875rem;
	color: ${({ theme }) => theme.colors.white};
	background-color: ${({ theme }) => theme.colors.black};
	height: 40px;
`;
