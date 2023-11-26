import React from 'react';
import './end.css';
import { useSelector } from 'react-redux';

const End = () => {
  // const formDetailsList = useSelector((state) => state.formDetailsList);
  // const { formDetails } = formDetailsList;

  const makeApp = useSelector((state) => state.makeAppointment);
  const { loading, detials } = makeApp;

  return (
    <div className="message">
      {loading ? (
        <h3>LOADING</h3>
      ) : (
        <p>You created an appointment successfully!</p>
      )}
    </div>
  );
};

export default End;
