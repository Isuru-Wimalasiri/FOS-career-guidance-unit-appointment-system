import { connection } from '../config/database.js';

//get All advisors
export const getAdvisors = (req, res) => {
  const getAllAdvisorsQ = 'SELECT * FROM counselor';

  connection.query(getAllAdvisorsQ, [], (err, result) => {
    if (err) return res.json({ Message: 'Error inside server' });
    return res.json(result);
  });
};

//get Advisors by degree program
export const getAdvisorsByDegree = (req, res) => {
  const degreeId = req.params.degreeId;
  const getAllAdvisorsQ =
    'SELECT * FROM counselor c JOIN consoler_degree cd ON c.idcounselor = cd.conselor_id WHERE cd.degree_id = ?';

  connection.query(getAllAdvisorsQ, [degreeId], (err, result) => {
    if (err) return res.json({ Message: 'Error inside server' });
    return res.json(result);
  });
};
