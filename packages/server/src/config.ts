import path from 'path';
import { config as configLoader } from 'dotenv';

configLoader({ path: path.resolve(__dirname, './../../../.env') });

export const config = {
  PORT: process.env.PORT || 8080,
  MONGO_CONNECTION_STRING: process.env.MONGO_CONNECTION_STRING,

  FACEBOOK_APP_ID: process.env.FACEBOOK_APP_ID,
  FACEBOOK_APP_SECRET: process.env.FACEBOOK_APP_SECRET,
  FRONTEND_REDIRECT_BASE_URL: process.env.FRONTEND_REDIRECT_BASE_URL,

  JWT_SECRET: process.env.JWT_SECRET,
};
