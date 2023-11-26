import { connection } from '../config/database.js';

//get Times by advisor id
export const getTimesByAdvisor = (req, res) => {
  const advisorId = req.params.advisorId;
  const getAllTimesByAdvisorQ =
    'SELECT * FROM c_dt dateTime WHERE dateTime.idcounselor = ?';

  connection.query(getAllTimesByAdvisorQ, [advisorId], (err, result) => {
    if (err) return res.json({ Message: 'Error inside server' });
    return res.json(result);
  });
};
