import { cleanEnv, str } from 'envalid';

export function validateEnv() {
  cleanEnv(process.env, {
    MONGO_CONNECTION_STRING: str(),
  });
}

export default validateEnv;
