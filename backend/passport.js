import passport from 'passport';
import { Strategy } from 'passport-google-oauth20';
import dotenv from 'dotenv';
dotenv.config({
  path: './config/config.env',
});

const AUTH_OPTIONS = {
  callbackURL: process.env.GOOGLE_CALLBACK_URL,
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
};

const verifyFunction = (accessToken, refreshToken, profile, done) => {
  console.log('profile is', profile);
  done(null, profile);
};

passport.use(new Strategy(AUTH_OPTIONS, verifyFunction));

export default passport;
