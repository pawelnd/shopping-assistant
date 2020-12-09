import { NextFunction, Request, Response } from 'express';
import { singleton } from 'tsyringe';
import { BindAll } from 'lodash-decorators';
import RequestWithUser from '../common/interfaces/requestWithUser.interface';
import AuthenticationService from './auth.service';
import { UserRepository } from '../repository/UserRepository';
import WrongAuthenticationTokenException from '../exceptions/WrongAuthenticationTokenException';
import User from '../common/interfaces/user.interface';

@singleton()
@BindAll()
class AuthMiddleware {
  constructor(
    private userRepository: UserRepository,
    private authService: AuthenticationService,
  ) {}

  public apply = async (
    request: Request,
    response: Response,
    next: NextFunction,
  ) => {
    const req = request as RequestWithUser;
    const { cookies } = request;

    try {
      const authCookie = cookies[this.authService.AUTH_HEADER];
      const tokenData = this.authService.readAuthCookie(authCookie);
      const { email } = tokenData;
      const user = (await this.userRepository.findByEmail(email)) as User;
      if (user) {
        req.user = user;
        next();
      } else {
        next(new WrongAuthenticationTokenException());
      }
    } catch (error) {
      next(new WrongAuthenticationTokenException());
    }
  };
}

export default AuthMiddleware;
