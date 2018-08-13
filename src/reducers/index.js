import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { RESET_APP } from 'Constants';

const appReducers = combineReducers({
  firebase: firebaseReducer,
});

const reducers = (state, action) => {
  return appReducers(action.type === RESET_APP ? undefined : state, action);
};

export default reducers;
