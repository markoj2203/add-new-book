import React from "react";
import { useDispatch } from "react-redux";

export default function NewSubGenre() {
  const dispatch = useDispatch();

  const onChangeCheck = (e) => {
    dispatch({ type: "DESCRIPTION_CHECKED", checked: e.target.checked });
  };

  return (
    <div className="new-sub-genre">
      <form>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="subGenre"
            placeholder="Subgenre Name"
          />
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="defaultCheck1"
            onChange={onChangeCheck}
          />
          <label className="form-check-label" htmlFor="defaultCheck1">
            Description is required for this subgenre
          </label>
        </div>
      </form>
    </div>
  );
}
