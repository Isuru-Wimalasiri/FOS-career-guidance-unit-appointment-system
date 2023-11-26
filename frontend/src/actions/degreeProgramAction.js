import axios from 'axios';
import {
  DEGREEPROGRAM_LIST_FAIL,
  DEGREEPROGRAM_LIST_REQUEST,
  DEGREEPROGRAM_LIST_SUCCESS,
} from '../constants/advisorConstant';

export const listDegreeProgram = () => async (dispatch) => {
  try {
    dispatch({ type: DEGREEPROGRAM_LIST_REQUEST });
    const { data } = await axios.get('http://localhost:3001/api/v1/degrees');

    dispatch({ type: DEGREEPROGRAM_LIST_SUCCESS, payload: data });
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
