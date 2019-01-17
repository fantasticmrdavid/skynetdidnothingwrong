import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { connectRouter } from 'connected-react-router';
import logStory from './logStory';

export default history => combineReducers({
  firebase: firebaseReducer,
  logStory,
  router: connectRouter(history),
});
