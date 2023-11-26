import express from 'express';
import { getTimesByAdvisor } from '../controllers/timeController.js';

const router = express.Router();

router.get('/time/:advisorId', getTimesByAdvisor);

export default router;
