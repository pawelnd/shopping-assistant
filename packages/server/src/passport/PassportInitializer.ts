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
  constructor(
    private userRepository: UserRepository,
    private authMiddleware: AuthMiddleware,
  ) {}

  public async initialize(expressApp: Application) {
    expressApp.use(/^\/api\/(?!auth).*/, this.authMiddleware.apply);
    expressApp.use(passport.initialize());
    passport.use(this.createLocalStrategy());
    passport.use(this.createFacebookStrategy());

    passport.serializeUser(function(user, done) {
      done(null, user);
    });

    passport.deserializeUser(function(user, done) {
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
        profileFields: ['id', 'email', 'displayName'],
      },
      async (accessToken, refreshToken, profile, done) => {
        const email = profile.emails[0].value as string;
        const user = {
          email,
          name: profile.displayName,
          lastLogin: new Date(),
        } as User;
        await this.userRepository.createOrUpdate(user);
        done(null, await this.userRepository.findByEmail(email));
      },
    );
  }
}

export default PassportInitializer;