import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  advisorListReducer,
  advisorDetailsReducer,
} from './reducers/advisorReducers';
import { degreeProgramListReducer } from './reducers/degreeProgramReducers';
import {
  formDetailsListReducer,
  makeAnAppointment,
} from './reducers/formDetailsReducer';
import { timeListReducer } from './reducers/timeReducer';
import { userLoginReducer } from './reducers/userReducer';

const reducer = combineReducers({
  advisorList: advisorListReducer,
  advisorDetails: advisorDetailsReducer,
  degreeProgramList: degreeProgramListReducer,
  formDetailsList: formDetailsListReducer,
  timesList: timeListReducer,
  userLogin: userLoginReducer,
  makeAppointment: makeAnAppointment,
});

const initialState = {};
const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
