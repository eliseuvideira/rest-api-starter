import { request } from '../request';

describe('api-docs', () => {
  test('GET /api-docs', async () => {
    expect.assertions(1);
    const response = await request().get('/api-docs').redirects(10);
    expect(response.status).toBe(200);
  });
});
