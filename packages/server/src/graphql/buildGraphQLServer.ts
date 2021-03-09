import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import { container, injectable } from 'tsyringe';
import { Application } from 'express';
import { HelloResolver } from '../hello';
import { PostsResolver } from '../posts/post.resolver';
import { buildContext } from './context';
import User from '../common/interfaces/user.interface';
import { Recipe } from '../learning/Recipe';
import { RecipeResolver } from '../learning/RecipeResolver';
import { MyResolver } from '../learning/MyResolver';
import { authChecker } from './authChecker';

export const buildGraphQLServer = async (app: Application) => {
  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [HelloResolver, PostsResolver, RecipeResolver, MyResolver],
      validate: false,
      container: { get: (cls) => container.resolve(cls) },
      authChecker,
    }),
    context: ({ req, res }) =>
      buildContext({
        req,
        res,
        currentUser: req.user as User,
      }),
  });
  apolloServer.applyMiddleware({
    app,
    cors: false,
  });
  console.log('GraphQL initialized');
};

export default buildGraphQLServer;
