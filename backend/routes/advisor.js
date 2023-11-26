import express from 'express';
import {
  getAdvisors,
  getAdvisorsByDegree,
} from '../controllers/advisorController.js';

const router = express.Router();

router.get('/advisors', getAdvisors);
router.get('/advisors/:degreeId', getAdvisorsByDegree);

export default router;
