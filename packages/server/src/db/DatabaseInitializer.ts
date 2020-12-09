import { injectable } from 'tsyringe';
import mongoose from 'mongoose';
import { config } from '../config';

@injectable()
export class DatabaseInitializer {
  public async initialize() {
    try {
      await mongoose.connect(config.MONGO_CONNECTION_STRING, {
        useNewUrlParser: true,
      });
      console.log('DB connected successfully');
    } catch (e) {
      console.log(
        `DB connection problem at connection string: ${config.MONGO_CONNECTION_STRING ??
          'empty'}`,
      );
    }
  }
}

export default DatabaseInitializer;
