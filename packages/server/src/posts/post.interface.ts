import { ObjectType, Field, Int } from 'type-graphql';

@ObjectType()
class Post {
  @Field(() => String)
  content: string;
  @Field()
  title: string;
  @Field()
  author?: string;
}

export default Post;
