import { getVideoService } from './videoService';

describe('getVideoService()', () => {
	it('should be able to fetch', async () => {
		expect.assertions(1);

		const response = await getVideoService('XzQCZHVmk4k');
		expect(response).toMatchSnapshot();
	});

	it('the fetch fails with an error', async () => {
		const response = await getVideoService('');

		expect(response).toMatchSnapshot();
	});
});
