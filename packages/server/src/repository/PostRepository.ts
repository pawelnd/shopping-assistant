import { injectable } from 'tsyringe';
import BaseRepository from './base/BaseRepository';
import Post from '../posts/post.interface';

@injectable()
export class PostRepository extends BaseRepository<Post> {
  constructor() {
    super(Post);
  }
}
