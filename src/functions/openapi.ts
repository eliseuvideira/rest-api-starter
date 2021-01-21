import openapiCommentParser, { ParserOptions } from 'openapi-comment-parser';
import { resolve } from 'path';

const config: ParserOptions = {
  cwd: resolve(__dirname, '..', '..'),
  extension: ['.js', '.cjs', '.mjs', '.ts', '.tsx', '.jsx', '.yaml', '.yml'],
  include: ['**'],
  exclude: [
    'docker-compose.yml',
    'coverage/**',
    'packages/*/test{,s}/**',
    '**/*.d.ts',
    'test{,s}/**',
    'test{,-*}.{js,cjs,mjs,ts,tsx,jsx,yaml,yml}',
    '**/*{.,-}test.{js,cjs,mjs,ts,tsx,jsx,yaml,yml}',
    '**/__tests__/**',
    '**/{ava,babel,nyc}.config.{js,cjs,mjs}',
    '**/jest.config.{js,cjs,mjs,ts}',
    '**/{karma,rollup,webpack}.config.js',
    '**/.{eslint,mocha}rc.{js,cjs}',
    '**/.{travis,yarnrc}.yml',
    '**/{docker-compose}.yml',
  ],
  excludeNodeModules: true,
  verbose: false,
  throwLevel: 'off',
};

const spec = openapiCommentParser(config);

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { version, name } = require('../../package.json');

const baseInfo = {
  openapi: '3.0.0',
  info: {
    title: name,
    version: version,
  },
  servers: [{ name: 'localhost', url: `http://localhost:${process.env.PORT}` }],
};

export const openapi = {
  ...spec,
  ...baseInfo,
};
