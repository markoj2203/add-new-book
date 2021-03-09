import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Genre() {
  const subGenreData = useSelector((state) => state.subGenreData.data);
  const dispatch = useDispatch();
  const selectSubgenre = (event) => {
    dispatch({ type: "SELECT_SUB_GENRE", subGenre: event.target.innerText });
    if (event.target.innerText === "Add new") {
      dispatch({ type: "COUNT_STEP", count: 3 });
    } else {
      dispatch({ type: "COUNT_STEP", count: 2 });
    }
  };

  return (
    <div className="row">
      {subGenreData.map((item, i) => (
        <div key={i} className="col col-pos">
          <button
            type="button"
            className="btn btn-outline-secondary button"
            onClick={selectSubgenre}
          >
            {item.name}
          </button>
        </div>
      ))}
      <button
        type="button"
        className="btn btn-outline-secondary button"
        onClick={selectSubgenre}
      >
        Add new
      </button>
    </div>
  );
}
