import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from '../NavLink';
import { CardContainer } from './styles';

export function CardList({ children }) {
	return <CardContainer.List>{children}</CardContainer.List>;
}

export function CardItem({ children }) {
	return <CardContainer.Item>{children}</CardContainer.Item>;
}

export function Card({ title, srcImage, width, height, params, children }) {
	return (
		<CardContainer>
			<NavLink params={params}>
				<CardContainer.Image
					src={srcImage}
					width={width}
					height={height}
					alt={title}
					loading="lazy"
				/>
			</NavLink>
			<CardContainer.Legend>
				<CardContainer.Description title={title}>
					{title}
				</CardContainer.Description>
				{children}
			</CardContainer.Legend>
		</CardContainer>
	);
}

CardList.propTypes = {
	children: PropTypes.node.isRequired,
};

CardItem.propTypes = {
	children: PropTypes.node.isRequired,
};

Card.defaultProps = {
	params: {},
};

Card.propTypes = {
	title: PropTypes.string.isRequired,
	srcImage: PropTypes.string.isRequired,
	width: PropTypes.number.isRequired,
	height: PropTypes.number.isRequired,
	params: PropTypes.oneOfType([PropTypes.object]),
	children: PropTypes.node.isRequired,
};
