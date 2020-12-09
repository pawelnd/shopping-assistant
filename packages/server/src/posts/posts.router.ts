import { Router } from 'express';
import { container } from 'tsyringe';
import passport from 'passport';
import { PostController } from './post.controller';
import CreatePostDto from './post.dto';
import validationMiddleware from '../middleware/validation.middleware';

const postsRouter = Router();
const userController = container.resolve(PostController);

postsRouter.get('/', userController.getAllPosts);
postsRouter.delete('/all', [], userController.removeAllPosts);
postsRouter.post(
  '/',
  validationMiddleware(CreatePostDto),
  userController.createPost,
);

export default postsRouter;
