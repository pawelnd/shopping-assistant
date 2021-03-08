// eslint-disable-next-line max-classes-per-file
import {
  Arg,
  Ctx,
  Field,
  InputType,
  Mutation,
  Query,
  Resolver,
} from 'type-graphql';
import { injectable } from 'tsyringe';
import { Request, Response } from 'express';
import { PostRepository } from '../repository/PostRepository';
import Post from './post.interface';
import CreatePostDto from './post.dto';
import { Context } from '../graphql/context';

@InputType()
class PostInput extends Post {
  @Field()
  title: string;

  @Field()
  creator: string;
}

@Resolver(Post)
@injectable()
export class PostsResolver {
  constructor(private postRepository?: PostRepository) {
    console.log(postRepository);
  }

  @Query((returns) => [Post])
  async posts(): Promise<Post[]> {
    return this.postRepository.findAll();
  }

  @Mutation(() => Number)
  async removePosts() {
    const amountDeleted = await this.postRepository.removeAll();
    return amountDeleted;
  }

  @Mutation(() => Post)
  async createPost(
    @Arg('input') input: PostInput,
    @Ctx() { req }: Context,
  ): Promise<Post> {
    return this.postRepository.create(input);
  }
}
