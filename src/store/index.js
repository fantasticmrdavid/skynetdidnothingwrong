import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import firebase from 'firebase/app';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import reducers from 'reducers';

const {
  NODE_ENV,
  FIREBASE_API_KEY,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_DB_URL,
  FIREBASE_STORAGE_BUCKET,
} = process.env;

const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  databaseURL: FIREBASE_DB_URL,
  storageBucket: FIREBASE_STORAGE_BUCKET,
};

firebase.initializeApp(firebaseConfig);

const composeEnhancersClient = NODE_ENV === 'development' && !!window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : compose;

const middleware = applyMiddleware(thunk.withExtraArgument(getFirebase));

// Add redux Firebase to compose
const createStoreWithFirebase = composeEnhancersClient(
  middleware,
  reactReduxFirebase(firebase, { userProfile: 'users' }),
)(createStore);

// Create store with reducers and initial state
const store = createStoreWithFirebase(reducers);

export { store };
