import { Field, ID, ObjectType } from 'type-graphql';
import {Schema} from 'mongoose'
@ObjectType()
export class Recipe  {
  @Field((type) => ID)
  id?: string;

  @Field()
  title: string;

  @Field({ nullable: true })
  description?: string;

  @Field()
  creationDate: Date;

  @Field((type) => [String])
  ingredients: string[];
}


class RecipeSchema extends Recipe, Schema{

}
