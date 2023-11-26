import {
  ADD_DETAILS,
  MAKE_APPOINTMENT_FAIL,
  MAKE_APPOINTMENT_REQUEST,
  MAKE_APPOINTMENT_SUCCESS,
} from '../constants/formConstanst';

export const formDetailsListReducer = (state = { formDetails: {} }, action) => {
  switch (action.type) {
    case ADD_DETAILS:
      return { formDetails: action.payload };
    default:
      return state;
  }
};

export const makeAnAppointment = (state = {}, action) => {
  switch (action.type) {
    case MAKE_APPOINTMENT_REQUEST:
      return { loading: true };
    case MAKE_APPOINTMENT_SUCCESS:
      return { loading: false, detials: action.payload };
    case MAKE_APPOINTMENT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
