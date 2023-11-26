import axios from 'axios';
import { DEGREEPROGRAM_LIST_FAIL } from '../constants/advisorConstant';

import {
  MAKE_APPOINTMENT_FAIL,
  MAKE_APPOINTMENT_REQUEST,
  MAKE_APPOINTMENT_SUCCESS,
  ADD_DETAILS,
} from '../constants/formConstanst';

export const addDetails =
  ({ degreeDetails, advisorDetails, timeDetails }) =>
  async (dispatch) => {
    try {
      dispatch({
        type: ADD_DETAILS,
        payload: { degreeDetails, advisorDetails, timeDetails },
      });
    } catch (error) {
      dispatch({
        type: DEGREEPROGRAM_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const makeAppointment =
  (formDetails, studentDetials) => async (dispatch) => {
    try {
      dispatch({
        type: MAKE_APPOINTMENT_REQUEST,
      });

      const informations = {
        advisorId: formDetails.advisorDetails.conselor_id,
        degreeName: formDetails.degreeDetails.dp_name,
        time: formDetails.timeDetails.time.start_time,
        date: formDetails.timeDetails.date,
        studentId: studentDetials.id,
      };
      const config = {
        headers: { 'Content-Type': 'application/json' },
      };
      const { data } = await axios.post(
        'http://localhost:3001/api/v1/appoinment',
        informations,
        config
      );

      console.log(data);

      dispatch({ type: MAKE_APPOINTMENT_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: MAKE_APPOINTMENT_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
