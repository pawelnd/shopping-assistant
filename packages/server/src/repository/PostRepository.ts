import { injectable } from 'tsyringe';
import mongoose, { Document, Schema } from 'mongoose';
import BaseRepository from './base/BaseRepository';
import Post from '../posts/post.interface';

@injectable()
export class PostRepository extends BaseRepository<Post> {
  private static schema: Schema<Post> = new Schema({
    author: {
      ref: 'User',
      type: mongoose.Schema.Types.ObjectId,
    },
    content: String,
    label: String,
  });

  constructor() {
    super('Posts', PostRepository.schema);
  }
}
