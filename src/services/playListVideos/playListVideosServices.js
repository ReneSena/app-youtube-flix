import api from '../index';

export default function getPlaylistVideosServices(
	idPlaylist,
	resultPerPage = 2
) {
	return api.get(
		`/playlistItems?playlistId=${idPlaylist}&key=${process.env.REACT_APP_API_KEY}&part=snippet&maxResults=${resultPerPage}`
	);
}
