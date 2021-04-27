import { getSearchVideosService } from './searchVideosService';

describe('getSearchVideosService()', () => {
	it('should be able to fetch', async () => {
		expect.assertions(1);

		const response = await getSearchVideosService('carros');
		expect(response).toMatchSnapshot();
	});
});
