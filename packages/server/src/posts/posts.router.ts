import { Router } from 'express';
import { container } from 'tsyringe';
import { PostController } from './post.controller';

const postsRouter = Router();
const userController = container.resolve(PostController);

postsRouter.get('/', [], userController.getAllPosts);
postsRouter.post('/', userController.createPost);

export default postsRouter;
