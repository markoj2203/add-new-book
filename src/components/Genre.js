import React from "react";
import { useDispatch } from "react-redux";
import { dataObject } from "../data-object.js";

const data = dataObject.genres;

export default function Genre() {
  const dispatch = useDispatch();
  const selectGenre = (event) => {
    let genreArr = data.filter(function (item) {
      return item.name === event.target.innerText;
    });
    dispatch({ type: "SUB_GENRE_DATA", subGenreData: genreArr[0].subgenres });
    dispatch({ type: "SELECT_GENRE", genre: event.target.innerText });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      {data.map((item, i) => (
        <button
          key={i}
          type="button"
          className="btn btn-outline-secondary button"
          onClick={selectGenre}
          style={{ margin: "1em" }}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
}
