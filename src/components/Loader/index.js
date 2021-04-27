import React from 'react';

import { Container } from './styles';

export function Loader() {
	return (
		<Container>
			<svg
				width="180"
				height="180"
				viewBox="0 0 180 180"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<circle
					className="loader"
					cx="90"
					cy="90"
					r="86"
					stroke="#333"
					strokeWidth="8"
				/>
				<path
					className="loader"
					d="M66 48.4308L138 90L66 131.569L66 48.4308Z"
					stroke="#333"
					strokeWidth="8"
				/>
			</svg>
		</Container>
	);
}
