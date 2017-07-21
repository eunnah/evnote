import { combineReducers } from 'redux';

import SessionReducer from '../reducers/session_reducer';
import ErrorsReducer from '../reducers/errors_reducer';
import NotesReducer from '../reducers/notes_reducer';

const RootReducer = combineReducers({
  notes: NotesReducer,
  session: SessionReducer,
  errors: ErrorsReducer
});

export default RootReducer;
