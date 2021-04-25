import React from 'react';
import PropTypes from 'prop-types';

import { Section } from './styles';

export function PlayList({ title, children }) {
	return (
		<Section>
			<Section.Title>{title}</Section.Title>
			{children}
		</Section>
	);
}

PlayList.propTypes = {
	title: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
};
