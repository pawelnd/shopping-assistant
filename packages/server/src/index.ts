import express from 'express';
import cron from 'node-cron';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
import { PORT } from './config';
import 'source-map-support/register';
import 'reflect-metadata';
import mainRouter from './routes';

require('dotenv').config();

const initApp = () => {
  const app = express();
  app.use(cookieParser());
  app.get('/helathcheck', (req, res) => {
    res.send("Hey you i'm here...");
  });
  app.use('/api', mainRouter);
  app.use(express.static(`${__dirname}/../../client/build/`));

  app.listen({ port: PORT });
  return app;
};

const initDb = () => {
  const { MONGO_CONNECTION_STRING } = process.env;
  mongoose.connect(MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
  });
};

const bootstrap = async () => {
  initApp();
  initDb();
};

bootstrap()
  .then(() => {
    console.log(`🚀 API ready at http://localhost:${PORT} ${Math.random()}`);
  })
  .catch(error => {
    console.error(error);
    process.exit(1);
  });

let instanceUpTimeMinutes = 0;
cron.schedule('* * * * *', function() {
  instanceUpTimeMinutes += 1;
});
