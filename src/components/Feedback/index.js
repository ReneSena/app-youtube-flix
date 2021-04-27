import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export function Feedback({ urlImage, description }) {
	return (
		<Container>
			<img src={urlImage} alt="" width="400" />
			<p>{description}</p>
		</Container>
	);
}

Feedback.defaultProps = {
	description: '',
};

Feedback.propTypes = {
	urlImage: PropTypes.string.isRequired,
	description: PropTypes.string,
};
