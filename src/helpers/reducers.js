export const createReducer = (initialState, reducers) => {
  return (state, action = {}) => {
    if (typeof state === 'undefined') {
      return initialState;
    }

    return reducers[action.type] ? reducers[action.type](state, action) : state;
  };
};
