import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		outline: none;
	}

	body {
		font-family: 'Open Sans', sans-serif;
		font-size: 62.5%;
		width: 100%;
		color: ${({ theme }) => theme.colors.black};
	}
`;
