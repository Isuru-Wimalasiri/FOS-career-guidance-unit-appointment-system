import axios from 'axios';
import {
  TIME_LIST_REQUEST,
  TIME_LIST_SUCCESS,
  TIME_LIST_FAIL,
} from '../constants/advisorConstant';

export const listTimes = (id) => async (dispatch) => {
  try {
    dispatch({ type: TIME_LIST_REQUEST });
    const { data } = await axios.get(`http://localhost:3001/api/v1/time/${id}`);

    dispatch({ type: TIME_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: TIME_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// export const advisorDetails = (id) => async (dispatch) => {
//   try {
//     dispatch({ type: ADVISOR_DETAILS_REQUEST });
//     const { data } = await axios.get(
//       `http://localhost:3001/api/v1/advisors/${id}`
//     );

//     dispatch({ type: ADVISOR_DETAILS_SUCCESS, payload: data });
//   } catch (error) {
//     dispatch({
//       type: ADVISOR_DETAILS_FAIL,
//       payload:
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message,
//     });
//   }
// };
