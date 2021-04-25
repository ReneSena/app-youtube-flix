import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getVideoService } from '../services/videos/videoService';
import Template from '../template';

export default function watchPage() {
	const location = useLocation();
	const [player, setPlayer] = React.useState(location.videoId);

	useEffect(() => {
		async function getPlayerVideo() {
			const response = await getVideoService(location.videoId);
			const playerVideo = await response?.items[0].player.embedHtml;

			return setPlayer(playerVideo);
		}

		getPlayerVideo();
	}, []);

	return (
		<Template>
			<div
				dangerouslySetInnerHTML={{
					__html: player,
				}}
			/>
		</Template>
	);
}
