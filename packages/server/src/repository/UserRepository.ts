import { injectable } from 'tsyringe';
import { Schema } from 'mongoose';
import BaseRepository from './base/BaseRepository';
import User from '../common/interfaces/user.interface';

@injectable()
export class UserRepository extends BaseRepository<User> {
  private static addressSchema = new Schema({
    city: String,
    country: String,
    street: String,
  });

  private static schema = new Schema({
    address: UserRepository.addressSchema,
    email: String,
    name: String,
    photoUrl: String,
    password: String,
    lastLogin: Date,
  });

  constructor() {
    super('User', UserRepository.schema);
  }

  public async findByEmail(email: string): Promise<User> {
    return this.findOne({ email });
  }
}
