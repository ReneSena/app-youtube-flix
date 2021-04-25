import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';
import { FavoriteFilled, FavoriteOutline } from './icons/Heart';

export function CardButtonFavorite({ id, listFavorites, handler }) {
	const isActiveButton = listFavorites.indexOf(id) !== -1;

	return (
		<Container data-id={id} tabIndex="0" type="button" onClick={handler}>
			{isActiveButton ? <FavoriteFilled /> : <FavoriteOutline />}
		</Container>
	);
}

CardButtonFavorite.propTypes = {
	id: PropTypes.string.isRequired,
	listFavorites: PropTypes.oneOfType([PropTypes.array]).isRequired,
	handler: PropTypes.func.isRequired,
};
