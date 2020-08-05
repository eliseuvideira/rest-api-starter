import { createDatabase } from './createDatabase';

export const database = createDatabase({
  client: 'pg',
  connection: {
    host: process.env.DB_HOST || '',
    port: +(process.env.DB_PORT || 5432),
    user: process.env.DB_USER || '',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_DATABASE || '',
  },
});
