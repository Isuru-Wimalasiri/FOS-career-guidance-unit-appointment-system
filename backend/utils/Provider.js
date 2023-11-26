import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import passport from 'passport';
import { connection } from '../config/database.js';

export const connectPassport = () => {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: process.env.GOOGLE_CALLBACK_URL,
      },
      function (accessToken, refreshToken, profile, done) {
        // database comes here
        const email = profile.emails[0].value; // Extract the email address
        const fName = profile.name.givenName;
        const lName = profile.name.familyName;
        const regNo = email.split('@')[0];
        const googleId = profile.id;

        // Check if the email already exists in the database
        const checkEmailQuery = 'SELECT * FROM student WHERE semail = ?';
        connection.query(checkEmailQuery, [email], (err, results) => {
          if (err) {
            console.error('Error checking email address:', err);
            return done(err);
          }

          if (results.length > 0) {
            console.log('Email address already exists in the database');
            return done(null, profile);
          }

          // Save the email address to the database
          const saveDetailsQuery =
            'INSERT INTO student (semail, firstName, lastName, regNo, googleid) VALUES (?,?,?,?,?)';
          connection.query(
            saveDetailsQuery,
            [email, fName, lName, regNo, googleId],
            (err, result) => {
              if (err) {
                console.error('Error saving student details:', err);
                return done(err);
              }
              console.log('Student details saved to the database');
              done(null, profile);
            }
          );
        });
      }
    )
  );

  passport.serializeUser(function (user, done) {
    done(null, user);
  });

  passport.deserializeUser(async function (user, done) {
    done(null, user);
  });
};
