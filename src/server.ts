import dotenv from 'dotenv-safe';

dotenv.config();

console.info(`NODE_ENV is set to ${process.env.NODE_ENV}`);

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { version } = require('../package.json');

console.info(`version ${version}`);

import http from 'http';
import app from './app';
import { database } from './utils/database';

const port = process.env.PORT;
app.set('port', port);

const server = http.createServer(app);

const onError = <T extends { syscall: string; code: string }>(err: T): void => {
  if (err.syscall !== 'listen') {
    throw err;
  }
  switch (err.code) {
    case 'EACCES':
      console.error(`Port ${port} requires elevated privileges`);
      break;
    case 'EADDRINUSE':
      console.error(`Port ${port} is already in use`);
      break;
    default:
      console.error(err);
  }
  process.exit(1);
};

const onListening = (): void => {
  const addr = server.address();
  if (addr && typeof addr !== 'string') {
    console.info(`Listening on port ${addr.port}`);
  }
};

(async (): Promise<void> => {
  await database.raw('SELECT 1 AS server_status');
  server.listen(port);
  server.on('error', onError);
  server.on('listening', onListening);
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
