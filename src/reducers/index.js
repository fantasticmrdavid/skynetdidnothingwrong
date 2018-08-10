import { combineReducers } from 'redux';
import { RESET_APP } from 'Constants';
import { firebaseReducer } from 'react-redux-firebase';

const appReducers = combineReducers({
  firebase: firebaseReducer,
});

const reducers = (state, action) => {
  return appReducers(action.type === RESET_APP ? undefined : state, action);
};

export default reducers;
