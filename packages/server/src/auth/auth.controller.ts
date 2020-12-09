import { Response, NextFunction } from 'express';
import { injectable } from 'tsyringe';

import { BindAll } from 'lodash-decorators';
import AuthenticationService from './auth.service';
import { config } from '../config';

@injectable()
@BindAll()
class AuthController {
  constructor(private authenticationService: AuthenticationService) {}

  public generateToken(req: any, resp: Response, next: NextFunction) {
    const { FRONTEND_REDIRECT_BASE_URL } = config;
    const tokenData = this.authenticationService.createToken(req.user);
    resp.cookie(this.authenticationService.AUTH_HEADER, tokenData, {
      httpOnly: true,
    });
    resp.redirect(FRONTEND_REDIRECT_BASE_URL);
  }

  public logout(req: any, resp: Response, next: NextFunction) {
    const { FRONTEND_REDIRECT_BASE_URL } = config;
    resp.clearCookie(this.authenticationService.AUTH_HEADER);
    resp.redirect(FRONTEND_REDIRECT_BASE_URL);
  }
}

export default AuthController;
