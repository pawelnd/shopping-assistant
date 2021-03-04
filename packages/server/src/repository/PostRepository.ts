import { injectable } from 'tsyringe';
import { Schema } from 'mongoose';
import BaseRepository from './base/BaseRepository';
import Post from '../posts/post.interface';

@injectable()
export class PostRepository extends BaseRepository<Post> {
  private static schema = new Schema({
    content: String,
    title: String,
  });

  constructor() {
    super('Posts', PostRepository.schema);
  }
}
