import { combineReducers } from 'redux';

import SessionReducer from '../reducers/session_reducer';
import ErrorsReducer from '../reducers/errors_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  errors: ErrorsReducer
});

export default RootReducer;
