import {
  LOG_STORY_FOCUSED,
  LOG_STORY_BLURRED,
} from 'Constants';

export const focusLogStory = () => (dispatch) => {
  return dispatch({
    type: LOG_STORY_FOCUSED,
  });
};

export const blurLogStory = () => (dispatch) => {
  return dispatch({
    type: LOG_STORY_BLURRED,
  });
};
