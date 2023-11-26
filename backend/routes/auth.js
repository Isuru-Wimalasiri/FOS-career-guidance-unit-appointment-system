import express from 'express';
import passport from '../passport.js';
import { connection } from '../config/database.js';

const router = express.Router();

//Save the session to cookie
passport.serializeUser((user, done) => {
  done(null, user);
});

//Save the session from the cookie
passport.deserializeUser((obj, done) => {
  done(null, obj);
});

router.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['email', 'profile'],
  })
);
router.get(
  '/auth/google/callback',
  passport.authenticate('google', {
    failureRedirect: '/failure',
    successRedirect: process.env.FRONTEND_URL,
    session: true,
  }),
  (req, res) => {
    res.render(isuru, JSON.stringify({ name: 'isuru' })).status(200);
    console.log('Google call back us!');
  }
);
router.get('/auth/logout', (req, res) => {
  req.logout();
  res.redirect(process.env.FRONTEND_URL);
});

router.get('/failure', (req, res) => {
  return res.send('Fail to  log in!');
});

router.get('/auth/success', async (req, res) => {
  if (req.user) {
    const email = req.user.emails[0].value;
    const givenName = req.user.name.givenName;
    const lastName = req.user.name.familyName;
    const sNumber = email.split('@')[0];
    const id = req.user.id;

    //console.log(email, givenName, lastName, sNumber, id, req.user);

    const getStudentDetails = 'SELECT * FROM student WHERE googleid = ?';

    const saveStudentDetails =
      'INSERT INTO student (`semail`,`firstName`,`lastName`,`regNo`,`googleid`) VALUES (?)';

    let isExistingUser = false;
    connection.query(getStudentDetails, [id], (err, result) => {
      if (err) console.log(err);
      if (result[0]) {
        isExistingUser = true;
      }
    });

    if (!isExistingUser) {
      connection.query(
        saveStudentDetails,
        [[email, givenName, lastName, sNumber, id]],
        (err, result) => {
          //if (err) return res.json({ Message: 'Error inside server' });
          console.log(err);
        }
      );
    }

    res.status(200).json({
      user: req.user,
      cookies: req.cookies,
    });
  } else {
    res.json({ message: 'unauthorized request' });
  }
});

export default router;
