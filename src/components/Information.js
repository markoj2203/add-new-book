import React from "react";
import { useSelector } from "react-redux";

export default function Information() {
  const description = useSelector((state) => state.descriptionChecked.checked);
  return (
    <div className="info">
      <form>
        <div className="form-group">
          <label>Book Title</label>
          <input
            type="text"
            className="form-control"
            id="book"
            placeholder="Book Title"
          />
        </div>
        <div className="form-group">
          <label>Author</label>
          <select className="form-control" id="author">
            <option>Author 1</option>
            <option>Author 2</option>
            <option>Author 3</option>
            <option>Author 4</option>
            <option>Author 5</option>
          </select>
        </div>
        <div className="form-group">
          <label>ISBN</label>
          <input
            type="text"
            className="form-control"
            id="isbn"
            placeholder="Book Title"
          />
        </div>
        <div className="form-group">
          <label>Publisher</label>
          <select className="form-control" id="publisher">
            <option>Publisher 1</option>
            <option>Publisher 2</option>
            <option>Publisher 3</option>
            <option>Publisher 4</option>
            <option>Publisher 5</option>
          </select>
        </div>
        <div className="form-group">
          <label>Date published</label>
          <input
            className="form-control"
            type="datetime"
            placeholder="DD/MM/YYYY"
            id="date"
          />
        </div>
        <div className="form-group">
          <label>Number of pages</label>
          <input
            type="number"
            className="form-control"
            id="number"
            placeholder="Number of pages"
          />
        </div>
        <div className="form-group">
          <label>Format</label>
          <select className="form-control" id="publisher">
            <option>Format 1</option>
            <option>Format 2</option>
            <option>Format 3</option>
            <option>Format 4</option>
            <option>Format 5</option>
          </select>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="form-group">
              <label>Edition</label>
              <input
                type="text"
                className="form-control"
                id="edition"
                placeholder="Edition"
              />
            </div>
          </div>
          <div className="col-6">
            <div className="form-group">
              <label>Edition Language</label>
              <select className="form-control" id="editionLanguage">
                <option>Language 1</option>
                <option>Language 2</option>
                <option>Language 3</option>
                <option>Language 4</option>
                <option>Language 5</option>
              </select>
            </div>
          </div>
        </div>
        {description !== false ? (
          <div className="form-group">
            <label>Description</label>
            <textarea
              className="form-control"
              id="description"
              rows="3"
            ></textarea>
          </div>
        ) : null}
      </form>
    </div>
  );
}
