import { connection } from '../config/database.js';

//get All departments
export const getDepartments = (req, res) => {
  const getAllDepartmentsQ = 'SELECT * FROM department';

  connection.query(getAllDepartmentsQ, [], (err, result) => {
    if (err) return res.json({ Message: 'Error inside server' });
    return res.json(result);
  });
};
