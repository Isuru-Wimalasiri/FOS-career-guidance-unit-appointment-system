import {
  ADVISOR_LIST_REQUEST,
  ADVISOR_LIST_SUCCESS,
  ADVISOR_LIST_FAIL,
  ADVISOR_DETAILS_FAIL,
  ADVISOR_DETAILS_REQUEST,
  ADVISOR_DETAILS_SUCCESS,
} from '../constants/advisorConstant';

export const advisorListReducer = (state = { advisors: [] }, action) => {
  switch (action.type) {
    case ADVISOR_LIST_REQUEST:
      return { loading: true, advisors: [] };
    case ADVISOR_LIST_SUCCESS:
      return { loading: false, advisors: action.payload };
    case ADVISOR_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const advisorDetailsReducer = (state = { advisor: [] }, action) => {
  switch (action.type) {
    case ADVISOR_DETAILS_REQUEST:
      return { loadingAdv: true, ...state };
    case ADVISOR_DETAILS_SUCCESS:
      return { loadingAdv: false, advisor: action.payload };
    case ADVISOR_DETAILS_FAIL:
      return { loadingAdv: false, errorAdv: action.payload };
    default:
      return state;
  }
};
