import {
  HEARTBEAT_RATE_SET,
  HEARTBEAT_RATE_RESET,
} from 'Constants';
import { createReducer } from 'helpers/reducers';

const initialState = {
  rate: 90,
};

const reducers = {
  [HEARTBEAT_RATE_SET]: (state, action) => {
    const { rate } = action;
    return {
      ...state,
      rate,
    };
  },
  [HEARTBEAT_RATE_RESET]: () => initialState,
};

export default createReducer(initialState, reducers);
