import {
  HEARTBEAT_RATE_SET,
  HEARTBEAT_RATE_RESET,
} from 'Constants';

export const setHeartbeatRate = rate => (dispatch) => {
  return dispatch({
    type: HEARTBEAT_RATE_SET,
    rate,
  });
};

export const lowerHeartbeatRate = () => (dispatch, getState) => {
  const { heartbeat } = getState();
  const rate = parseInt(heartbeat.rate, 10);
  const newRate = rate > 10 ? rate - 20 : 0;
  return dispatch(setHeartbeatRate(newRate));
};

export const raiseHeartbeatRate = () => (dispatch, getState) => {
  const { heartbeat } = getState();
  const rate = parseInt(heartbeat.rate, 10);
  const newRate = rate < 220 ? rate + 20 : 220;
  return dispatch(setHeartbeatRate(newRate));
};

export const resetHeartbeatRate = () => (dispatch) => {
  return dispatch({
    type: HEARTBEAT_RATE_RESET,
  });
};
