export const setNextStep = () => {
  return {
    type: "NEXT_STEP",
  };
};

export const setBackStep = () => {
  return {
    type: "BACK_STEP",
  };
};

export const selectGenre = (genre) => {
  return {
    type: "SELECT_GENRE",
    payload: genre,
  };
};

export const subGenreData = (subGenreData) => {
  return {
    type: "SUB_GENRE_DATA",
    payload: subGenreData,
  };
};

export const selectSubGenre = (subGenre) => {
  return {
    type: "SELECT_SUB_GENRE",
    payload: subGenre,
  };
};
