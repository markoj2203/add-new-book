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
    <div className="row">
      {data.map((item, i) => (
        <div key={i} className="col col-pos">
          <button
            type="button"
            className="btn btn-outline-secondary button"
            onClick={selectGenre}
          >
            {item.name}
          </button>
        </div>
      ))}
    </div>
  );
}
