import { combineReducers } from "redux";

const setActiveStep = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "NEXT_STEP":
      return { count: state.count + 1 };
    case "BACK_STEP":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  setActiveStep,
});

export default rootReducer;
