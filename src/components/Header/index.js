import React from 'react';
import { useLocation } from 'react-router-dom';
import { NavLink } from '../NavLink';
import Logo from '../../assets/images/logo.svg';
import { links } from './content';
import { Container } from './styles';

export default function Header() {
	const location = useLocation();

	return (
		<Container>
			<img
				src={Logo}
				width="50"
				height="50"
				alt="Logo do site Aperte o Play"
			/>
			<Container.Navbar>
				<Container.Menu>
					{links.map(link => (
						<Container.MenuItem key={link.url}>
							<NavLink
								params={link.url}
								active={
									location.pathname === link.url && 'active'
								}>
								{link.label}
							</NavLink>
						</Container.MenuItem>
					))}
				</Container.Menu>
			</Container.Navbar>
		</Container>
	);
}
