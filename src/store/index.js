import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import firebase from 'firebase/app';
import { reduxFirebase, getFirebase } from 'react-redux-firebase';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'connected-react-router';
import createRootReducer from 'reducers';
import 'firebase/database';

const {
  NODE_ENV,
  FIREBASE_PROJECT_ID,
  FIREBASE_API_KEY,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_DB_URL,
  FIREBASE_STORAGE_BUCKET,
  FIREBASE_MESSAGING_SENDER_ID,
} = process.env;

const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  databaseURL: FIREBASE_DB_URL,
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: FIREBASE_STORAGE_BUCKET,
  messageSenderId: FIREBASE_MESSAGING_SENDER_ID,
};

firebase.initializeApp(firebaseConfig);

const history = createHistory();
const routerHistoryMiddleware = routerMiddleware(history);

const composeEnhancersClient = NODE_ENV === 'development' && !!window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : compose;

const middleware = applyMiddleware(
  thunk.withExtraArgument(getFirebase),
  routerHistoryMiddleware,
);

// Add redux Firebase to compose
const createStoreWithFirebase = composeEnhancersClient(
  middleware,
  reduxFirebase(firebase, { userProfile: 'users' }),
)(createStore);

// Create store with reducers and initial state
const store = createStoreWithFirebase(createRootReducer(history));

export { store, history };
