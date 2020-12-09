import { Router } from 'express';
import { container } from 'tsyringe';
import passport from 'passport';
import AuthController from './auth.controller';

const authRouter = Router();
const authController = container.resolve(AuthController);

authRouter.post(
  '/local',
  passport.authenticate('local'),
  authController.generateToken,
);

authRouter.get('/facebook', passport.authenticate('facebook'));
authRouter.get(
  '/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: `/error` }),
  authController.generateToken,
);
authRouter.get('/logout', authController.logout);

export default authRouter;
