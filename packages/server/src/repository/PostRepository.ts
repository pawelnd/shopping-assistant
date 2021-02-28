import { injectable } from 'tsyringe';
import { Document, Schema } from 'mongoose';
import BaseRepository from './base/BaseRepository';
import Post from '../posts/post.interface';

interface PostModel extends Post, Document {}

@injectable()
export class PostRepository extends BaseRepository<Post> {
  private static schema = new Schema({
    content: String,
    label: String,
  });

  constructor() {
    super('Posts', PostRepository.schema);
  }
}
