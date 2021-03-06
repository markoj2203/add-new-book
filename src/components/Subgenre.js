import React from "react";
import { dataObject } from "../data-object.js";

const data = dataObject.genres;

export default function Genre() {
  const selectSubgenre = (event) => {
    //setSubGenre(event.target.innerText);
  };

  return (
    <div className="row">
      {data.map((item, i) => (
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
    </div>
  );
}
