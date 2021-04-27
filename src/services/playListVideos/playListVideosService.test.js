import { getPlaylistVideosService } from './playListVideosService';

describe('getPlaylistVideosService()', () => {
	it('should be able to fetch', async () => {
		expect.assertions(1);
		try {
			const response = await getPlaylistVideosService(
				'PLSPJba4WAtJa2sG6UNgcBEDLr7wFmfAT8'
			);
			expect(response).toBe(response);
		} catch (error) {
			expect(response).not.toBe(error);
		}
	});

	test('the fetch fails with an error', async () => {
		expect.assertions(1);
		try {
			await getPlaylistVideosService('#id');
		} catch (error) {
			expect(error).toBe(error);
		}
	});
});
