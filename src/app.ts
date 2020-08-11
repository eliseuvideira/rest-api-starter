import express from 'express';
import cors from 'cors';
import { json } from 'body-parser';
import { readdirSync } from 'fs';
import { join } from 'path';
import { notFound, exception } from './middlewares/errors';
import morgan from 'morgan';
import helmet from 'helmet';
import compression from 'compression';
import { serve, setup } from 'swagger-ui-express';
import { openapi } from './utils/openapi';

const app = express();

app.use(cors());
app.use(json());
app.use(morgan('combined', { skip: () => process.env.NODE_ENV === 'test' }));
app.use(helmet());
app.use(compression());

const routes = readdirSync(join(__dirname, 'routes'));
for (const route of routes) {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  app.use(require(join(__dirname, 'routes', route)).default);
}

app.use('/api-docs', serve, setup(openapi));

app.use(notFound);
app.use(exception);

export default app;
