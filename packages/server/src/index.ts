import 'source-map-support/register';
import 'reflect-metadata';
import express from 'express';
import { container } from 'tsyringe';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import compression from 'compression';
import morgan from 'morgan';
import bodyParser from 'body-parser';

import path from 'path';
import mainRouter from './routes';
import { validateEnv } from './utils/validateEnv';

import { PassportInitializer } from './passport/PassportInitializer';
import errorMiddleware from './middleware/error.middleware';
import { config as serverConfig } from './config';
import { DatabaseInitializer } from './db/DatabaseInitializer';

const initApp = async () => {
  console.log('Starting server app with following variables');
  console.log(JSON.stringify(serverConfig));

  const { PORT } = serverConfig;
  const app = express();
  app.use(cookieParser());
  app.use(morgan('combined'));
  app.use(compression());
  app.use(helmet());
  app.use(bodyParser.json());

  await container.resolve(DatabaseInitializer).initialize();
  await container.resolve(PassportInitializer).initialize(app);

  app.use('/api', mainRouter);
  app.use(errorMiddleware);
  app.use(express.static(`${__dirname}/../../../client/build/`));
  app.get('*', (req, res) => {
    res.sendFile(path.join(`${__dirname}/../../../client/build/index.html`));
  });

  app.listen({ port: PORT });
  return app;
};

const bootstrap = async () => {
  console.log('Initializing app');
  validateEnv();
  await initApp();
};

bootstrap()
  .then(() => {
    console.log(`🚀 API ready at http://localhost:${serverConfig.PORT}`);
  })
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
