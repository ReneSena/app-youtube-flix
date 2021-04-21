/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

function Card({ infoCard }) {
	const { thumbnails, title } = infoCard.snippet;

	return (
		<figure>
			<img
				src={thumbnails.medium.url}
				width={thumbnails.medium.width}
				height={thumbnails.medium.height}
				alt={title}
				loading="lazy"
			/>
			<figcaption>{title}</figcaption>
		</figure>
	);
}

function CardList({ children }) {
	return <ul>{children}</ul>;
}

function CardItem({ children, ...props }) {
	// eslint-disable-next-line react/jsx-props-no-spreading
	return <li {...props}>{children}</li>;
}

export default function CardVideo({ playLists }) {
	return playLists.map(playList => (
		<section key={playList.category}>
			<h2>{playList.category}</h2>
			<CardList>
				{playList.data.map(video => (
					<CardItem key={video.id}>
						<Link
							to={{
								pathname: '/watch',
								videoId: video.snippet.resourceId.videoId,
							}}>
							<Card infoCard={video} />
						</Link>
					</CardItem>
				))}
			</CardList>
		</section>
	));
}
