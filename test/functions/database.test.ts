import dotenv from 'dotenv-safe';

dotenv.config();

import { database } from '../../src/functions/database';
import {
  DB_HOST,
  DB_PORT,
  DB_USER,
  DB_PASSWORD,
  DB_DATABASE,
} from '../../src/functions/constants';

describe('database', () => {
  it('uses the environment configuration', () => {
    expect.assertions(5);
    const connection = database.client.config.connection;
    expect(connection.host).toBe(DB_HOST);
    expect(connection.port).toBe(DB_PORT);
    expect(connection.user).toBe(DB_USER);
    expect(connection.password).toBe(DB_PASSWORD);
    expect(connection.database).toBe(DB_DATABASE);
  });
});
