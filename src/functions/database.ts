import { createDatabase } from './createDatabase';
import {
  DB_HOST,
  DB_PORT,
  DB_USER,
  DB_PASSWORD,
  DB_DATABASE,
} from './constants';

export const database = createDatabase({
  client: 'pg',
  connection: {
    host: DB_HOST,
    port: DB_PORT || 5432,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE,
  },
});
