import React from 'react';
import styled from 'styled-components';
import { NavLink } from '../NavLink';

const Container = styled.header`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	width: 100%;
	max-width: 100%;
	height: 60px;
	padding: 0 20px;
	background-color: #8ebcff;
	position: fixed;
	top: 0;
	z-index: 100;
`;

const Navbar = styled.nav``;

const Menu = styled.ul`
	display: flex;
	align-items: center;
`;

const MenuItem = styled.li`
	list-style: none;
	margin: 0 20px;

	& a {
		font-size: 1rem;
		text-decoration: none;
		color: #222;
	}
`;

const links = [
	{
		label: 'Home',
		url: '/',
	},
	{
		label: 'Favoritos',
		url: '/favorites',
	},
	{
		label: 'Pesquisar',
		url: '/search',
	},
];

export default function Header() {
	return (
		<Container>
			<Navbar>
				<Menu>
					{links.map(link => (
						<MenuItem key={link.url}>
							<NavLink params={link.url}>{link.label}</NavLink>
						</MenuItem>
					))}
				</Menu>
			</Navbar>
		</Container>
	);
}
