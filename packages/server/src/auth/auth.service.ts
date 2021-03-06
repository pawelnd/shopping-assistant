import * as jwt from 'jsonwebtoken';

import { injectable } from 'tsyringe';

import User from '../common/interfaces/user.interface';
import { config } from '../config';
import DataStoredInToken from '../common/interfaces/dataStoredInToken.interface';
import { TokenData } from '../common/interfaces/tokenData.interface';

@injectable()
class AuthenticationService {
  public readonly AUTH_HEADER = 'Authorization';

  public readAuthCookie(tokenData: TokenData): DataStoredInToken {
    return jwt.verify(tokenData.token, this.getSecret()) as DataStoredInToken;
  }

  public createToken(user: User): TokenData {
    const expiresIn = 60 * 60;
    const dataStoredInToken: DataStoredInToken = {
      id: user._id,
      email: user.email,
    };
    return {
      expiresIn,
      token: jwt.sign(dataStoredInToken, this.getSecret(), {
        expiresIn,
      }),
    };
  }

  private getSecret = () => (config.JWT_SECRET as string) || '';
}

export default AuthenticationService;
