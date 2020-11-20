import { NextFunction, Response, RequestHandler } from 'express';
import * as jwt from 'jsonwebtoken';
import DataStoredInToken from 'interfaces/dataStoredInToken.interface';
import userModel from 'user/user.model';
import AuthenticationTokenMissingException from 'exceptions/AuthenticationTokenMissingException';
import WrongAuthenticationTokenException from 'exceptions/WrongAuthenticationTokenException';
import RequestWithUser from '../interfaces/requestWithUser.interface';
import AuthenticationService from '../auth/auth.service';

async function authMiddleware(
  request: RequestWithUser,
  response: Response,
  next: NextFunction,
) {
  const { cookies } = request;
  const { headers } = request;
  const authService = new AuthenticationService();

  if (
    (cookies && cookies[authService.AUTH_HEADER]) ||
    (headers && headers[authService.AUTH_HEADER])
  ) {
    const token =
      cookies[authService.AUTH_HEADER] || headers[authService.AUTH_HEADER];
    const secret = process.env.JWT_SECRET;
    try {
      const verificationResponse = jwt.verify(
        token,
        secret,
      ) as DataStoredInToken;
      const id = verificationResponse._id;
      const user = await userModel.findById(id);
      if (user) {
        request.user = user;
        next();
      } else {
        next(new WrongAuthenticationTokenException());
      }
    } catch (error) {
      next(new WrongAuthenticationTokenException());
    }
  } else {
    next(new AuthenticationTokenMissingException());
  }
}

export default authMiddleware;
