import styled from 'styled-components';

export const Container = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-around;
	width: 100%;
	max-width: 100%;
	height: 60px;
	padding: 0 20px;
	background-color: ${({ theme }) => theme.colors.black};
	position: fixed;
	top: 0;
	z-index: 100;
`;

Container.Navbar = styled.nav``;

Container.Menu = styled.ul`
	display: flex;
	align-items: center;
`;

Container.MenuItem = styled.li`
	list-style: none;
	margin: 0 20px;

	& a {
		font-size: 1rem;
		text-decoration: none;
	}
`;
