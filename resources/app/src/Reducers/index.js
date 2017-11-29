import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import user from './user';
import note from './note';

const rootReducer = combineReducers({
  user,
  note,
  form: formReducer,
});

export default rootReducer;
