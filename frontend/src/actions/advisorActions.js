import axios from 'axios';
import {
  ADVISOR_LIST_FAIL,
  ADVISOR_LIST_REQUEST,
  ADVISOR_LIST_SUCCESS,
  ADVISOR_DETAILS_FAIL,
  ADVISOR_DETAILS_REQUEST,
  ADVISOR_DETAILS_SUCCESS,
} from '../constants/advisorConstant';

export const listAdvisors = () => async (dispatch) => {
  try {
    dispatch({ type: ADVISOR_LIST_REQUEST });
    const { data } = await axios.get('http://localhost:3001/api/v1/advisors');

    dispatch({ type: ADVISOR_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ADVISOR_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const advisorDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: ADVISOR_DETAILS_REQUEST });
    const { data } = await axios.get(
      `http://localhost:3001/api/v1/advisors/${id}`
    );

    dispatch({ type: ADVISOR_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ADVISOR_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
