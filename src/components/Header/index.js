import React from 'react';
import styled from 'styled-components';
import { NavLink } from '../NavLink';
import Logo from '../../assets/images/logo.svg';

const Container = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-around;
	width: 100%;
	max-width: 100%;
	height: 60px;
	padding: 0 20px;
	background-color: #121212;
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
		color: #ff0;
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
			<img
				src={Logo}
				width="50"
				height="50"
				alt="Logo do site Aperte o Play"
			/>
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
