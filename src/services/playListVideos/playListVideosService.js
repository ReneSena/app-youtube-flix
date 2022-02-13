import api from '../index';

export function getPlaylistVideosService(idPlaylist) {
	return api
		.get(
			`/playlistItems?playlistId=${idPlaylist}&key=${process.env.REACT_APP_VERCEL_API_KEY}&part=snippet&fields=items&maxResults=5`
		)
		.then(response => {
			if (response.status === 200) {
				return response.data;
			}

			return response;
		})
		.catch(error => {
			throw new Error(
				'Não foi possível buscar os dados do servidor, tente recarregar a página.',
				error
			);
		});
}
