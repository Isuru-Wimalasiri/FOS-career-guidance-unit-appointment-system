import React, { useEffect, useState } from 'react';
import './time.css';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useDispatch, useSelector } from 'react-redux';
import { listTimes } from '../../actions/timeActions';
import { addDetails } from '../../actions/formDetailsActions';

const Time = () => {
  const [selectedDateIndex, setSelectedDateIndex] = useState(undefined);
  const [formattedDate, setFormattedDate] = useState(undefined);
  const dispatch = useDispatch();

  const timesList = useSelector((state) => state.timesList);
  const formDetailsList = useSelector((state) => state.formDetailsList);

  const { availableTimes, error, loading } = timesList;
  const { formDetails } = formDetailsList;

  useEffect(() => {
    dispatch(listTimes(formDetails.advisorDetails.idcounselor));
  }, [dispatch, formDetails.advisorDetails.idcounselor]);

  const shouldDisableDate = (date) => {
    const day = date.day();
    switch (day) {
      case 1:
        return checkDisable('Monday');
      case 2:
        return checkDisable('Tuesday');
      case 3:
        return checkDisable('Wednesday');
      case 4:
        return checkDisable('Thursday');
      case 5:
        return checkDisable('Friday');
      case 6:
        return checkDisable('Saturday');
      case 0:
        return checkDisable('Sunday');
      default:
        return;
    }
  };

  const checkDisable = (day) => {
    for (let i = 0; i < availableTimes.length; i++) {
      if (day.toLowerCase() === availableTimes[i].date.toLowerCase()) {
        return day.toLowerCase() !== availableTimes[i].date.toLowerCase();
      }
    }
    return true;
  };

  const handleDate = (value) => {
    const yearMonthDate = dayjs(value).format('YYYY-MM-DD');

    const day = value.day();
    switch (day) {
      case 1:
        return getIndexAvailableTime(yearMonthDate, 'Monday');
      case 2:
        return getIndexAvailableTime(yearMonthDate, 'Tuesday');
      case 3:
        return getIndexAvailableTime(yearMonthDate, 'Wednesday');
      case 4:
        return getIndexAvailableTime(yearMonthDate, 'Thursday');
      case 5:
        return getIndexAvailableTime(yearMonthDate, 'Friday');
      case 6:
        return getIndexAvailableTime(yearMonthDate, 'Saturday');
      case 0:
        return getIndexAvailableTime(yearMonthDate, 'Sunday');
      default:
    }
  };

  const getIndexAvailableTime = (yearMonthDate, date) => {
    for (let i = 0; i < availableTimes.length; i++) {
      if (availableTimes[i].date.toLowerCase() === date.toLowerCase()) {
        setSelectedDateIndex(i);
        dispatch(
          addDetails({
            degreeDetails: formDetails.degreeDetails,
            advisorDetails: formDetails.advisorDetails,
            timeDetails: { date: yearMonthDate, time: availableTimes[i] },
          })
        );
        return i;
      }
    }
  };

  const timePrinter = (time) => {
    const timeArr = time.split(':');
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
      <div className="dater">
        <div className="timeInput">
          <span className="dateLabel">Date:</span>
          <LocalizationProvider dateAdapter={AdapterDayjs} className="date">
            <DatePicker
              className="customDatePicker"
              disablePast
              shouldDisableDate={shouldDisableDate}
              onChange={(newValue) => handleDate(newValue)}
              defaultValue={dayjs(formDetails.timeDetails?.date) || false}
            />
          </LocalizationProvider>
        </div>
      </div>
      <div className="timer">
        <div className="timeInput">
          <span className="dateLabel">Time:</span>
          <span className="availableTime">
            {formDetails.timeDetails ? (
              <div>{timePrinter(formDetails.timeDetails.time.start_time)}</div>
            ) : (
              <div>Please select a date</div>
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Time;
