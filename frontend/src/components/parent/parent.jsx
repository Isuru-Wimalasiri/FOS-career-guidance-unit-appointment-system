import React, { useEffect, useState } from 'react';
import './parent.css';
import Advisor from '../advisor/advisor';
import Time from '../time/time';
import End from '../end/end';
import Confirm from '../confirm/confirm';
import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import Looks3Icon from '@mui/icons-material/Looks3';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useDispatch, useSelector } from 'react-redux';
import { makeAppointment } from '../../actions/formDetailsActions';

function ParentForm() {
  const [step, setStep] = useState(0);
  const [headClassNames, setHeadClassNames] = useState({
    advisor: ['checkIcon activeCheck', 'checkName activeCheckName'],
    lineOne: 'headerLine',
    time: ['checkIcon', 'checkName'],
    lineTwo: 'headerLine',
    confirm: ['checkIcon', 'checkName'],
  });
  const formTitles = [
    'Select Your Advisor',
    'Select Convinent Time',
    'Confirm Appoinment',
    'Faculty of Science - CGU',
  ];

  const formDetailsList = useSelector((state) => state.formDetailsList);
  const { formDetails } = formDetailsList;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const makeApp = useSelector((state) => state.makeAppointment);
  const { loading, detials } = makeApp;

  const dispatch = useDispatch();

  const DisplayPage = () => {
    if (step === 0) {
      return <Advisor />;
    } else if (step === 1) {
      return <Time />;
    }
    if (step === 2) {
      return <Confirm />;
    }
    if (step === 3) {
      return <End />;
    }
  };

  const displayClassNames = () => {
    if (step === 0) {
      setHeadClassNames((prev) => ({
        ...prev,
        advisor: ['checkIcon activeCheck', 'checkName activeCheckName'],
        lineOne: 'headerLine',
        time: ['checkIcon', 'checkName'],
        lineTwo: 'headerLine',
        confirm: ['checkIcon', 'checkName'],
      }));
    } else if (step === 1) {
      setHeadClassNames((prev) => ({
        ...prev,
        advisor: ['checkIcon successCheck', 'checkName successCheckName'],
        lineOne: 'successheaderLine',
        time: ['checkIcon activeCheck', 'checkName activeCheckName'],
        lineTwo: 'headerLine',
        confirm: ['checkIcon', 'checkName'],
      }));
    } else if (step === 2) {
      setHeadClassNames((prev) => ({
        ...prev,
        time: ['checkIcon successCheck', 'checkName successCheckName'],
        lineTwo: 'successheaderLine',
        confirm: ['checkIcon activeCheck', 'checkName activeCheckName'],
      }));
    } else if (step === 3) {
    }
  };

  useEffect(() => {
    displayClassNames();
  }, [step]);

  const submitDetails = () => {
    dispatch(makeAppointment(formDetails, userInfo.user));
  };

  return (
    <div className="form">
      <div className="formHeader">
        <div className="headerContent">
          <ul>
            <li>
              <LooksOneIcon className={headClassNames.advisor[0]} />
              <span className={headClassNames.advisor[1]}>Advisor</span>
            </li>
            <li>
              <span className={headClassNames.lineOne}></span>
            </li>
            <li>
              <LooksTwoIcon className={headClassNames.time[0]} />
              <span className={headClassNames.time[1]}>Time</span>
            </li>
            <li>
              <span className={headClassNames.lineTwo}></span>
            </li>
            <li>
              <Looks3Icon className={headClassNames.confirm[0]} />
              <span className={headClassNames.confirm[1]}>Confirm</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="formBody d-flex align-items-center justify-content-center">
        {DisplayPage()}
      </div>
      <div className="formFooter">
        <div className="footerContainer">
          {step !== formTitles.length - 1 && (
            <button
              disabled={step === 0}
              onClick={() => setStep(step - 1)}
              type="button"
              className="formBtn"
              id={step === 0 ? 'disableBack' : 'backBtn'}
            >
              <NavigateBeforeIcon />
              <span>Back</span>
            </button>
          )}
          {step !== formTitles.length - 1 && (
            <button
              type="button"
              className="formBtn"
              disabled={
                step === formTitles.length - 1 ||
                (formDetails.timeDetails === null && step === 1)
              }
              onClick={() => {
                if (step === 2) {
                  submitDetails();
                }
                setStep(step + 1);
              }}
              id={
                formDetails.timeDetails === null && step === 1
                  ? 'disableNext'
                  : 'nextBtn'
              }
            >
              {step !== formTitles.length - 2 ? (
                <>
                  <span>Next</span>
                  <NavigateNextIcon />
                </>
              ) : (
                <div className="submitBtn">Submit</div>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ParentForm;
