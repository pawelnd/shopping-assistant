import { injectable } from 'tsyringe';
import BaseRepository from './base/BaseRepository';
import User from '../common/interfaces/user.interface';

@injectable()
export class UserRepository extends BaseRepository<User> {
  constructor() {
    super(User);
  }

  public async findByEmail(email: string): Promise<User> {
    return this.findOne({ email });
  }
}
