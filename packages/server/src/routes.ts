import express from 'express';
import postsRouter from './posts/posts.router';

const mainRouter = express.Router();

mainRouter.use('/posts', postsRouter);

export default mainRouter;
