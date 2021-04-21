import React from 'react';
import { useLocation } from 'react-router-dom';

export default function watchPage() {
	const location = useLocation();

	return (
		<iframe
			width="560"
			height="315"
			src={`https://www.youtube.com/embed/${location.videoId}?autoplay=1`}
			title="YouTube video player"
			frameBorder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowFullScreen
		/>
	);
}
