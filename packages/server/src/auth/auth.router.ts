import { Router } from 'express';
import { container } from 'tsyringe';
import passport from 'passport';
import AuthController from './auth.controller';
import AuthMiddleware from './auth.middleware';

const authRouter = Router();
const authController = container.resolve(AuthController);
const authMiddleware = container.resolve(AuthMiddleware);

authRouter.post(
  '/local',
  passport.authenticate('local'),
  authController.generateToken,
);
authRouter.get('/me', authMiddleware.apply, authController.check);
authRouter.get('/facebook', passport.authenticate('facebook'));
authRouter.get(
  '/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: `/error` }),
  authController.generateToken,
);
authRouter.get('/logout', authController.logout);

export default authRouter;
