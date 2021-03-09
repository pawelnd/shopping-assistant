import {
  Authorized,
  Field,
  Mutation,
  ObjectType,
  Query,
  Resolver,
} from 'type-graphql';

@ObjectType()
class MyObject {
  @Field()
  publicField: string;

  @Authorized()
  @Field()
  authorizedField: string;

  @Authorized('ADMIN')
  @Field()
  adminField: string;

  @Authorized(['ADMIN', 'MODERATOR'])
  @Field({ nullable: true })
  hiddenField?: string;
}

@Resolver()
export class MyResolver {
  @Query(() => MyObject)
  publicQuery(): MyObject {
    return {
      publicField: 'Some public data',
      authorizedField: 'Data for logged users only',
      adminField: 'Top secret info for admin',
    };
  }

  @Authorized()
  @Query()
  authedQuery(): string {
    return 'Authorized users only!';
  }

  @Authorized('ADMIN', 'MODERATOR')
  @Mutation()
  adminMutation(): string {
    return 'You are an admin/moderator, you can safely drop the database ;)';
  }
}
