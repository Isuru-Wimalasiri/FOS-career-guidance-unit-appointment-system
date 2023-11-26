import React from 'react';
import './confirm.css';
import { useSelector } from 'react-redux';
const Confirm = () => {
  const formDetailsList = useSelector((state) => state.formDetailsList);
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const { formDetails } = formDetailsList;

  const timePrinter = (time) => {
    const timeArr = time?.split(':');
    const isAM = Number(timeArr[0]) < 12;
    if (isAM) {
      const timeFormat = `${timeArr[0]}:${timeArr[1]} AM`;
      return <>{timeFormat}</>;
    } else {
      const timeFormat = `${timeArr[0]}:${timeArr[1]} PM`;
      return <>{timeFormat}</>;
    }
  };

  return (
    <div>
      <div className="detailComponent">
        <div className="details detailsFirst">
          <span className="detailLabel">Name</span>
          <span className="information">{`${userInfo.user.name.givenName} ${userInfo.user.name.familyName}`}</span>
        </div>
      </div>
      <div className="detailComponent">
        <div className="details">
          <span className="detailLabel">Advisor</span>
          <span className="information">
            {formDetails.advisorDetails.c_name}
          </span>
        </div>
      </div>
      <div className="detailComponent">
        <div className="details">
          <span className="detailLabel">Degree programme</span>
          <span className="information">
            {formDetails.degreeDetails.dp_name}
          </span>
        </div>
      </div>
      <div className="detailComponent">
        <div className="details">
          <span className="detailLabel">Date</span>
          <span className="information">{formDetails.timeDetails.date}</span>
        </div>
      </div>
      <div className="detailComponent">
        <div className="details">
          <span className="detailLabel">Time</span>
          <span className="information">
            {timePrinter(formDetails.timeDetails.time.start_time)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Confirm;
