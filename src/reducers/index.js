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

const selectGenre = (state = { genre: "" }, action) => {
  switch (action.type) {
    case "SELECT_GENRE":
      return { ...state, genre: action.genre };
    default:
      return state;
  }
};

const subGenreData = (state = {}, action) => {
  switch (action.type) {
    case "SUB_GENRE_DATA":
      return { ...state, data: action.subGenreData };
    default:
      return state;
  }
};

const selectSubGenre = (state = { subGenre: "" }, action) => {
  switch (action.type) {
    case "SELECT_SUB_GENRE":
      return { ...state, subGenre: action.subGenre };
    default:
      return state;
  }
};

const errorStep = (state = { message: "" }, action) => {
  switch (action.type) {
    case "ERROR_STEP":
      return { ...state, message: action.message };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  setActiveStep,
  selectGenre,
  subGenreData,
  selectSubGenre,
  errorStep,
});

export default rootReducer;
