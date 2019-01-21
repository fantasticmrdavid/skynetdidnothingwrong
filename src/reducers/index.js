import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { connectRouter } from 'connected-react-router';

import heartbeat from './heartbeat';
import logStory from './logStory';

export default history => combineReducers({
  firebase: firebaseReducer,
  heartbeat,
  logStory,
  router: connectRouter(history),
});
