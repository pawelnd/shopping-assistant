import express from 'express';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
import helmet from 'helmet';
import compression from 'compression';
import morgan from 'morgan';
import { config } from 'dotenv';
import path from 'path';
import { PORT } from './config';
import 'source-map-support/register';
import 'reflect-metadata';
import mainRouter from './routes';
import { validateEnv } from './utils/validateEnv';
import errorMiddleware from './middleware/error.middleware';

const initApp = () => {
  const app = express();
  app.use(cookieParser());
  app.use(morgan('combined'));
  app.use(compression());
  app.use(helmet());
  app.use(helmet());
  app.use(express.json());

  app.use('/api', mainRouter);

  app.use(express.static(`${__dirname}/../../client/build/`));
  app.use(errorMiddleware);
  app.listen({ port: PORT });
  return app;
};

const initDb = async () => {
  const { MONGO_CONNECTION_STRING } = process.env;
  try {
    await mongoose.connect(MONGO_CONNECTION_STRING, {
      useNewUrlParser: true,
    });
    console.log('DB connected successfully');
  } catch (e) {
    console.log(
      `DB connection problem at connection string: ${MONGO_CONNECTION_STRING ??
        'empty'}`,
    );
  }
};

function applyEnvVariables() {
  config({ path: path.resolve(__dirname, './../../../.env') });
}

const bootstrap = async () => {
  applyEnvVariables();
  console.log('Initializing app');
  validateEnv();
  await initDb();
  await initApp();
};

bootstrap()
  .then(() => {
    console.log(`🚀 API ready at http://localhost:${PORT}`);
  })
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
