import express from 'express';
import dotenv from 'dotenv';
import passport from './passport.js';
import cookieSession from 'cookie-session';
import cors from 'cors';
import bodyParser from 'body-parser';
const app = express();
dotenv.config({
  path: './config/config.env',
});

// Using middleware
app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  cors({
    credentials: true,
    origin: process.env.FRONTEND_URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  })
);

app.use(
  cookieSession({
    name: 'session',
    maxAge: 60 * 60 * 24 * 1000,
    keys: [process.env.COOKIE_KEY_1, process.env.COOKIE_KEY_2],
  })
);

// register regenerate & save after the cookieSession middleware initialization
app.use(function (request, response, next) {
  if (request.session && !request.session.regenerate) {
    request.session.regenerate = (cb) => {
      cb();
    };
  }
  if (request.session && !request.session.save) {
    request.session.save = (cb) => {
      cb();
    };
  }
  next();
});
app.use(passport.initialize());
app.use(passport.session());

//connectPassport();

// import routers
import userRoute from './routes/user.js';
import departmentRoute from './routes/department.js';
import degreeRoute from './routes/degree.js';
import advisorRoute from './routes/advisor.js';
import timeRoute from './routes/time.js';
import appointmentRoute from './routes/appointment.js';
// import passport from 'passport';
// import { errorMiddleware } from './middlewares/errorMiddleware.js';
import authRoute from './routes/auth.js';

app.use('/api/v1', authRoute);
app.use('/api/v1', userRoute);
app.use('/api/v1', departmentRoute);
app.use('/api/v1', degreeRoute);
app.use('/api/v1', advisorRoute);
app.use('/api/v1', timeRoute);
app.use('/api/v1', appointmentRoute);

// Using error middleware
//app.use(errorMiddleware);

export default app;
