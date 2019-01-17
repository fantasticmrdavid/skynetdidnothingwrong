import {
  LOG_STORY_FOCUSED,
  LOG_STORY_BLURRED,
} from 'Constants';
import { createReducer } from 'helpers/reducers';

const initialState = {
  focused: false,
};

const reducers = {
  [LOG_STORY_FOCUSED]: (state) => {
    return {
      ...state,
      focused: true,
    };
  },
  [LOG_STORY_BLURRED]: (state) => {
    return {
      ...state,
      focused: false,
    };
  },
};

export default createReducer(initialState, reducers);
