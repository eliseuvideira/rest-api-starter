import dotenv from 'dotenv-safe';

dotenv.config();

import { openapi } from '../../src/utils/openapi';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const packageJson = require('../../package.json');

describe('openapi', () => {
  it('has version and name properties according to package.json file', () => {
    expect.assertions(2);
    expect(packageJson.version).toBe(openapi.info.version);
    expect(packageJson.name).toBe(openapi.info.title);
  });
});
