import api from '../index';

export function getSearchVideosService(searchValue) {
	return api
		.get(
			`/search?q=${searchValue}&part=snippet&key=${process.env.REACT_APP_API_KEY}&maxResults=15`
		)
		.then(response => {
			if (response.status === 200) {
				return response.data;
			}

			return response;
		});
}
