import React from "react";

export default function NewSubGenre() {
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
          />
          <label class="form-check-label" for="defaultCheck1">
            Description is required for this subgenre
          </label>
        </div>
      </form>
    </div>
  );
}
