import dotenv from 'dotenv-safe';

dotenv.config();

import { sign, decode } from '../../src/utils/jwt';

describe('jwt', () => {
  test('it signs and decodes correctly', async () => {
    const object = { key: +new Date() };

    const token = await sign(object);

    expect(token).toBeDefined();
    expect(typeof token).toBe('string');

    const decoded = await decode(token);

    expect(decoded).toBeDefined();
    expect(decoded.key).toEqual(object.key);
  });

  it('throw errors on invalid input', async () => {
    await expect(async () => decode('invalid token')).rejects.toThrow();
  });
});
