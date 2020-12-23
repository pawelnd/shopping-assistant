import { Response, NextFunction } from 'express';
import { injectable } from 'tsyringe';

import { BindAll } from 'lodash-decorators';
import AuthenticationService from './auth.service';
import { config } from '../config';
import RequestWithUser from "../common/interfaces/requestWithUser.interface";

@injectable()
@BindAll()
class AuthController {
  constructor(private authenticationService: AuthenticationService) {}

  public generateToken(req: RequestWithUser, resp: Response) {
    const { FRONTEND_REDIRECT_BASE_URL } = config;
    const tokenData = this.authenticationService.createToken(req.user);
    resp.cookie(this.authenticationService.AUTH_HEADER, tokenData, {
      httpOnly: true,
    });
    resp.redirect(FRONTEND_REDIRECT_BASE_URL);
  }

  public logout(req: RequestWithUser, resp: Response) {
    const { FRONTEND_REDIRECT_BASE_URL } = config;
    resp.clearCookie(this.authenticationService.AUTH_HEADER);
    resp.redirect(FRONTEND_REDIRECT_BASE_URL);
  }

  public check = (req: RequestWithUser, resp: Response) => {
    resp.send(req.user);
  };
}

export default AuthController;
