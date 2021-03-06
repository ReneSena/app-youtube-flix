/* eslint-disable no-unused-vars */
import React from 'react';
import { PlayList } from '../../components/PlayList';
import { CardList, CardItem, Card } from '../../components/CardThumbnail';
import { getPlaylistVideosService } from '../../services/playListVideos/playListVideosService';
import Template from '../../template';
import { CardButtonFavorite } from '../../components/ButtonFavorite';
import { categories } from './content';
import { ContextGlobal } from '../../context';
import { Loader } from '../../components/Loader';

export function HomePage() {
	const { favorites, setFavorites } = React.useContext(ContextGlobal);
	const [videos, setVideos] = React.useState([]);

	React.useEffect(() => {
		categories.map(async category => {
			const infoVideos = await getPlaylistVideosService(
				category.idPlayList
			);

			setVideos(value => [
				...value,
				{ category: category.name, playList: infoVideos },
			]);
		});
	}, []);

	function favoriteCard(event) {
		const buttonID = event.target.getAttribute('data-id');
		const existInLocalStorange = favorites.indexOf(buttonID) !== -1;

		if (existInLocalStorange) {
			setFavorites(() => favorites.filter(video => video !== buttonID));

			favorites.splice(buttonID, 1);
		} else {
			setFavorites([...favorites, buttonID]);
		}

		localStorage.setItem('favorites', JSON.stringify(favorites));
	}

	return (
		<Template>
			{videos.length === 0 && <Loader />}
			{videos.map(playList => (
				<PlayList title={playList.category} key={playList.category}>
					<CardList>
						{playList.playList.items.map(item => (
							<CardItem key={item.snippet.resourceId.videoId}>
								<Card
									params={{
										pathname: '/watch',
										videoId:
											item.snippet.resourceId.videoId,
									}}
									title={item.snippet.title}
									srcImage={
										item.snippet.thumbnails.medium.url
									}
									width={item.snippet.thumbnails.medium.width}
									height={
										item.snippet.thumbnails.medium.height
									}>
									<CardButtonFavorite
										id={item.snippet.resourceId.videoId}
										listFavorites={favorites}
										handler={event => favoriteCard(event)}
									/>
								</Card>
							</CardItem>
						))}
					</CardList>
				</PlayList>
			))}
		</Template>
	);
}
