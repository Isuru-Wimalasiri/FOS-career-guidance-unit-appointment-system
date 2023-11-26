import express from 'express';
import {
  createAppoinment,
  getAppointments,
} from '../controllers/appointmentController.js';
const router = express.Router();

router.get('/appointments', getAppointments);
// router.post(
//   '/appointments',
//   passport.authenticate('google', { session: false }),
//   createAppointment
// );

router.post('/appoinment', createAppoinment);

export default router;
