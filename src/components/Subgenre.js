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
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      {subGenreData.map((item, i) => (
        <button
          key={i}
          type="button"
          className="btn btn-outline-secondary button"
          onClick={selectSubgenre}
          style={{ margin: "1em" }}
        >
          {item.name}
        </button>
      ))}
      <button
        type="button"
        className="btn btn-outline-secondary button"
        onClick={selectSubgenre}
        style={{ margin: "1em" }}
      >
        Add new
      </button>
    </div>
  );
}
