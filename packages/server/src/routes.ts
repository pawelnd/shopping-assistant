import express from 'express';
import postsRouter from './posts/posts.router';
import authRouter from "./auth/auth.router";

const mainRouter = express.Router();

mainRouter.use('/post', postsRouter);
mainRouter.use('/auth', authRouter);

export default mainRouter;
