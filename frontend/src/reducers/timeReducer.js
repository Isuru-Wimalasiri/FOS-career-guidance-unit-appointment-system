import {
  TIME_LIST_FAIL,
  TIME_LIST_REQUEST,
  TIME_LIST_SUCCESS,
} from '../constants/advisorConstant';

export const timeListReducer = (state = { availableTimes: [] }, action) => {
  switch (action.type) {
    case TIME_LIST_REQUEST:
      return { loading: true, availableTimes: [] };
    case TIME_LIST_SUCCESS:
      return { loading: false, availableTimes: action.payload };
    case TIME_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
