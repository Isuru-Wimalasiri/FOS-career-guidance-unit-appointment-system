import express from 'express';
import passport from 'passport';
import { connection } from '../config/database.js';

const router = express.Router();

router.get(
  '/googlelogin',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

router.get(
  '/login',
  passport.authenticate('google', {
    successRedirect: process.env.FRONTEND_URL,
    failureRedirect: '/login/failed',
  }),
  (req, res) => {
    //Successful authentication, redirect to a success page or perform other [actions]

    res.redirect(process.env.FRONTEND_URL);
  }
);

router.get('/success', (req, res) => {
  if (req.user) {
    const getStudentDetails = 'SELECT * FROM student WHERE googleid = ?';

    connection.query(getStudentDetails, [req.user.id], (err, result) => {
      if (err) return res.json({ Message: 'Error inside server' });
      console.log(result);
      return res.json(result);
    });
  }
});

export default router;
