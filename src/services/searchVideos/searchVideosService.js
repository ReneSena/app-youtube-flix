import api from '../index';

export function getSearchVideosService(searchValue) {
	return api
		.get(
			`/search?q=${searchValue}&part=snippet&key=${process.env.REACT_APP_VERCEL_API_KEY}&maxResults=25`
		)
		.then(response => {
			if (response.status === 200) {
				return response.data;
			}

			return response;
		});
}
