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

export const errorStep = (message) => {
  return {
    type: "ERROR_STEP",
    payload: message,
  };
};

export const descriptionChecked = (checked) => {
  return {
    type: "DESCRIPTION_CHECKED",
    payload: checked,
  };
};

export const countStep = (count) => {
  return {
    type: "COUNT_STEP",
    payload: count,
  };
};
