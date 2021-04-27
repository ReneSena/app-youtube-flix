import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

export function NavLink({ params, children, active }) {
	return (
		<Container to={params} active={active}>
			{children}
		</Container>
	);
}

NavLink.propTypes = {
	params: PropTypes.oneOfType([PropTypes.object]).isRequired,
	children: PropTypes.node.isRequired,
	active: PropTypes.bool.isRequired,
};
