import express from 'express';
import { getDegrees } from '../controllers/degreeController.js';

const router = express.Router();

router.get('/degrees', getDegrees);

export default router;
