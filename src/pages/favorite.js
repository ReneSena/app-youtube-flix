import React from 'react';
import { Card, CardItem, CardList } from '../components/CardThumbnail';
import { ContextGlobal } from '../context';
import Template from '../template';
import { CardButtonFavorite } from '../components/ButtonFavorite';
import { getVideoService } from '../services/videos/videoService';
import FeedbackFavorite from '../assets/images/favorite.svg';
import { Feedback } from '../components/Feedback';

function favoritePage() {
	const [listFavorites, setListFavorites] = React.useState([]);
	const { favorites } = React.useContext(ContextGlobal);

	React.useEffect(() => {
		favorites.map(async videoId => {
			const response = await getVideoService(videoId);
			return setListFavorites(valueOld => [...valueOld, response]);
		});
	}, [favorites]);

	function undoFavoriteCard(event) {
		const buttonID = event.target.getAttribute('data-id');
		const existInLocalStorange = favorites.indexOf(buttonID) !== -1;

		if (existInLocalStorange) {
			setListFavorites(() =>
				listFavorites.filter(item => item.items[0].id !== buttonID)
			);

			favorites.splice(buttonID, 1);
		}

		localStorage.setItem('favorites', JSON.stringify(favorites));
	}

	return (
		<Template>
			{favorites.length === 0 && (
				<Feedback
					urlImage={FeedbackFavorite}
					description="Você não tem nenhum video salvo"
				/>
			)}
			<CardList>
				{listFavorites.length !== 0 &&
					listFavorites.map(video => (
						<CardItem key={video.items[0].id}>
							<Card
								params={{
									pathname: '/watch',
									videoId: video.items[0].id,
								}}
								title={video.items[0].snippet.title}
								srcImage={
									video.items[0].snippet.thumbnails.medium.url
								}
								width={
									video.items[0].snippet.thumbnails.medium
										.width
								}
								height={
									video.items[0].snippet.thumbnails.medium
										.height
								}>
								<CardButtonFavorite
									listFavorites={favorites}
									id={video.items[0].id}
									handler={event => undoFavoriteCard(event)}
								/>
							</Card>
						</CardItem>
					))}
			</CardList>
		</Template>
	);
}

export default favoritePage;
