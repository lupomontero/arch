export default (initialState = {}) => {
  let state = { ...initialState };
  const listeners = [];
  return {
    getState: () => state,
    setState: (newState) => {
      state = { ...state, ...newState };
      listeners.forEach(fn => fn());
    },
    subscribe: (fn) => {
      listeners.push(fn);
    },
  };
};
