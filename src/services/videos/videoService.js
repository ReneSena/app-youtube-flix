import api from '../index';

export function getVideoService(idVideo) {
	return api
		.get(
			`/videos?id=${idVideo}&part=snippet,player&key=${process.env.REACT_APP_VERCEL_API_KEY}`
		)
		.then(response => {
			if (response.status === 200) {
				return response.data;
			}

			return response;
		});
}
