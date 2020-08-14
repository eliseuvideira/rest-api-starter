import dotenv from 'dotenv-safe';

dotenv.config();

import { sign, decode } from '../../src/utils/jwt';
import { randomBytes } from 'crypto';

describe('jwt', () => {
  const JWT_SECRET = randomBytes(48).toString();

  test('it signs and decodes correctly', async () => {
    const object = { key: +new Date() };

    const token = await sign(object, JWT_SECRET);

    expect(token).toBeDefined();
    expect(typeof token).toBe('string');

    const decoded = await decode(token, JWT_SECRET);

    expect(decoded).toBeDefined();
    expect(decoded.key).toEqual(object.key);
  });

  it('throw errors on invalid input', async () => {
    await expect(async () =>
      decode('invalid token', JWT_SECRET),
    ).rejects.toThrow();
  });
});
