import dotenv from 'dotenv-safe';

dotenv.config();

console.info(`NODE_ENV is set to ${process.env.NODE_ENV}`);
console.info(`version ${process.env.npm_package_version}`);

import http from 'http';
import app from './app';
import { database } from './functions/database';

const server = http.createServer(app);

const onError = <T extends { syscall: string; code: string }>(err: T): void => {
  if (err.syscall !== 'listen') {
    console.error(err);
    process.exit(1);
  }
  switch (err.code) {
    case 'EACCES':
      console.error(`Port ${process.env.PORT} requires elevated privileges`);
      break;
    case 'EADDRINUSE':
      console.error(`Port ${process.env.PORT} is already in use`);
      break;
    default:
      console.error(err);
  }
  process.exit(1);
};

const onListening = (): void => {
  const addr = server.address();
  if (addr && typeof addr !== 'string') {
    console.info(`listening at http://localhost:${addr.port}`);
  }
};

(async (): Promise<void> => {
  await database.raw('SELECT 1 AS server_status');
  server.listen(process.env.PORT);
  server.on('error', onError);
  server.on('listening', onListening);
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
