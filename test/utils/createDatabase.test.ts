import dotenv from 'dotenv-safe';

dotenv.config();

import { createDatabase } from '../../src/utils/createDatabase';
import {
  DB_HOST,
  DB_PORT,
  DB_USER,
  DB_PASSWORD,
  DB_DATABASE,
} from '../../src/utils/constants';

describe('createDatabase', () => {
  it('creates an knex database instance', () => {
    expect.assertions(6);
    const database = createDatabase({
      client: 'pg',
      connection: {
        host: DB_HOST,
        port: DB_PORT,
        user: DB_USER,
        password: DB_PASSWORD,
        database: DB_DATABASE,
      },
    });

    expect(database).toBeDefined();
    const connection = database.client.config.connection;
    expect(connection.host).toBe(DB_HOST);
    expect(connection.port).toBe(DB_PORT);
    expect(connection.user).toBe(DB_USER);
    expect(connection.password).toBe(DB_PASSWORD);
    expect(connection.database).toBe(DB_DATABASE);
  });
});
