import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

export function NavLink({ params, children }) {
	return <Container to={params}>{children}</Container>;
}

NavLink.propTypes = {
	params: PropTypes.oneOfType([PropTypes.object]).isRequired,
	children: PropTypes.node.isRequired,
};
