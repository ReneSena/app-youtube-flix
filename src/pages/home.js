import React from 'react';
import CardVideo from '../components/CardVideo';
import getPlaylistVideosServices from '../services/playListVideos/playListVideosServices';

const categories = [
	{
		name: 'Culinária',
		idPlayList: 'PLpUs89aC5iYSfn0PGWLbyKrR5g-NLg3WY',
	},
	{
		name: 'Esportes',
		idPlayList: 'PLSPJba4WAtJa2sG6UNgcBEDLr7wFmfAT8',
	},
	{
		name: 'Música',
		idPlayList: 'PLMC9KNkIncKtPzgY-5rmhvj7fax8fdxoj',
	},
	{
		name: 'Stand up',
		idPlayList: 'RDCMUCYM04a9yva0wMQ7bPlii4rg&start_radio=1',
	},
];

export default function HomePage() {
	const [videos, setVideos] = React.useState([]);

	React.useEffect(() => {
		function getPlayLists() {
			try {
				categories.map(async cat => {
					const playListVideos = await getPlaylistVideosServices(
						cat.idPlayList
					);

					setVideos(videoList => [
						...videoList,
						{
							category: cat.name,
							data: playListVideos.data.items,
						},
					]);
				});
			} catch (error) {
				throw new Error(
					'Não foi possível buscar os dados do servidor.'
				);
			}
		}

		getPlayLists();
	}, []);

	return <CardVideo playLists={videos} />;
}
