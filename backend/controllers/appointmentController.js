import { connection } from '../config/database.js';

export const getAppointments = (req, res) => {
  const data = {
    message: 'This is some protected data.',
    user: req.locals,
  };
  res.json(data);
};

export const createAppoinment = async (req, res) => {
  const sql1 =
    'INSERT INTO appointment (`idstudent`, `idcounselor`, `date_time`,`degreeDetails`) VALUES (?)';

  const getStudentId = 'SELECT idstudent FROM student WHERE googleid=(?)';
  const advisorId = req.body.advisorId;
  const degree = req.body.degreeName;
  const datetime = req.body.date + ' ' + req.body.time;

  const studentGID = req.body.studentId;

  connection.query(getStudentId, [studentGID], (err, result) => {
    if (err) console.log({ Message: 'Error inside server' });
    const studentId = result[0].idstudent;

    connection.query(
      sql1,
      [[studentId, advisorId, datetime, degree]],
      (err, result) => {
        if (err) console.log({ Message: 'Error inside server' });
        console.log(err);
      }
    );

    connection.query(
      sql1,
      [[studentId, advisorId, datetime, degree]],
      (err, result) => {
        if (err) console.log({ Message: 'Error inside server' });
        console.log(err);
      }
    );
  });

  res.status(201).json({
    message: 'appoinment created successfully',
  });
};
