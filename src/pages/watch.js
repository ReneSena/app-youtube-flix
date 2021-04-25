/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getVideoService } from '../services/videos/videoService';
import Template from '../template';

export default function watchPage() {
	const iframeYoutube = React.useRef();
	const location = useLocation();

	useEffect(() => {
		async function getPlayerVideo() {
			const response = await getVideoService(location.videoId);
			const playerVideo = await response?.items[0].player.embedHtml;

			iframeYoutube.current.innerHTML = playerVideo;
		}

		getPlayerVideo();
	}, []);

	return (
		<Template>
			<div ref={iframeYoutube} />
		</Template>
	);
}
