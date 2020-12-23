import { Response, Request, NextFunction } from 'express';
import { injectable } from 'tsyringe';
import { PostRepository } from '../repository/PostRepository';
import CreatePostDto from './post.dto';
import Post from './post.interface';

@injectable()
export class PostController {
  constructor(private postRepository?: PostRepository) {}

  public getAllPosts = async (request: Request, response: Response) => {
    const posts = await this.postRepository.findAll();
    response.send(posts);
  };

  public removeAllPosts = async (
    request: Request,
    response: Response,
    next,
  ) => {
    await this.postRepository.removeAll();
    response.send();
  };

  public createPost = async (request: Request, response: Response) => {
    const postData: CreatePostDto = request.body;
    const createdPost = await this.postRepository.create({
      ...postData,
    } as Post);

    response.send(createdPost);
  };
}

export default PostController;
