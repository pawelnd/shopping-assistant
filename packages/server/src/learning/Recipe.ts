import { Field, ID, ObjectType } from 'type-graphql';
import { Schema } from 'mongoose';
import { prop } from '@typegoose/typegoose';
@ObjectType()
export class Recipe {
  @Field((type) => ID)
  _id?: string;

  @Field()
  @prop()
  title: string;

  @Field({ nullable: true })
  @prop()
  description?: string;

  @Field()
  @prop()
  creationDate: Date;

  @Field((type) => [String])
  @prop()
  ingredients: string[];
}
