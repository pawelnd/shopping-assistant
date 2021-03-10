import { ObjectType, Field, Int, ID } from 'type-graphql';
import { prop } from '@typegoose/typegoose';

@ObjectType()
class Post {
  @Field(() => ID)
  _id: string;
  @Field(() => String)
  @prop()
  content: string;
  @Field()
  @prop()
  title: string;
  @Field()
  @prop()
  author?: string;
}

export default Post;
