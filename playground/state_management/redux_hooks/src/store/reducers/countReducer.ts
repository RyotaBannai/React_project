const initial_state = {
  count: 0,
};

export const CountReducer = (
  state: Count.CounterState = initial_state,
  action: Count.CounterAction
) => {
  if (typeof state === "undefined") {
    return initial_state;
  }
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
};
