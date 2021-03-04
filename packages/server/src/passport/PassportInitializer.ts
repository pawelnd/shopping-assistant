import { Application } from 'express';
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { Strategy as FacebookStrategy } from 'passport-facebook';
import { injectable } from 'tsyringe';
import { UserRepository } from '../repository/UserRepository';
import User from '../common/interfaces/user.interface';
import AuthMiddleware from '../auth/auth.middleware';
import { config } from '../config';

@injectable()
export class PassportInitializer {
  constructor(private userRepository: UserRepository) {}

  public async initialize(expressApp: Application) {
    expressApp.use(passport.initialize());
    passport.use(this.createLocalStrategy());
    passport.use(this.createFacebookStrategy());
    expressApp.enable('trust proxy'); // required by facebook auth

    passport.serializeUser(function (user, done) {
      done(null, user);
    });

    passport.deserializeUser(function (user, done) {
      done(null, user);
    });
  }

  /**
   * @deprecated
   */
  private createLocalStrategy() {
    return new LocalStrategy(async (username, password, done) => {
      console.log(username, password);
      const user = await this.userRepository.findByEmail(username);
      done(null, user);
    });
  }

  private createFacebookStrategy() {
    const { FACEBOOK_APP_ID, FACEBOOK_APP_SECRET } = config;
    return new FacebookStrategy(
      {
        clientID: FACEBOOK_APP_ID,
        clientSecret: FACEBOOK_APP_SECRET,
        callbackURL: `/api/auth/facebook/callback`,
        profileFields: ['id', 'email', 'displayName', 'photos'],
      },
      async (accessToken, refreshToken, profile, done) => {
        const email = profile.emails[0].value as string;
        const userPayload = {
          email,
          name: profile.displayName,
          photoUrl: profile?.photos[0]?.value,
          lastLogin: new Date(),
        } as User;
        const user = await this.userRepository.createOrUpdate(userPayload);
        done(null, await user);
      },
    );
  }
}

export default PassportInitializer;
