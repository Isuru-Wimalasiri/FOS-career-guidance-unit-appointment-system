export const userProfile = () => {};

export const createUser = (req, res) => {
  const createUserQuery = 'SELECT * FROM student VALUES (?,?,?,?,?)';

  connection.query(createUserQuery, [], (err, result) => {
    if (err) return res.json({ Message: 'Error inside server' });
    return res.json(result);
  });
};
