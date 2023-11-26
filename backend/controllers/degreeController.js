import { connection } from '../config/database.js';

//get All degree programs
export const getDegrees = (req, res) => {
  const getAllDegreesQ = 'SELECT * FROM ad_degree ORDER BY dp_name ASC';

  connection.query(getAllDegreesQ, [], (err, result) => {
    if (err) return res.json({ Message: 'Error inside server' });
    return res.json(result);
  });
};
