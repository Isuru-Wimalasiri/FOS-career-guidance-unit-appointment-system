import {
  DEGREEPROGRAM_LIST_FAIL,
  DEGREEPROGRAM_LIST_REQUEST,
  DEGREEPROGRAM_LIST_SUCCESS,
} from '../constants/advisorConstant';

export const degreeProgramListReducer = (
  state = { degreeProgram: [] },
  action
) => {
  switch (action.type) {
    case DEGREEPROGRAM_LIST_REQUEST:
      return { loading: true, degreeProgram: [] };
    case DEGREEPROGRAM_LIST_SUCCESS:
      return { loading: false, degreeProgram: action.payload };
    case DEGREEPROGRAM_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
