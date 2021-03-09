import React from "react";
import img from "../img/check-circle.svg";

export default function Successful() {
  return (
    <div className="successful">
      <img src={img} alt=""></img>
      <label style={{ marginTop: "5%" }}>Book added successfuly</label>
      <button
        style={{ marginTop: "5%" }}
        type="button"
        className="btn btn-secondary"
        onClick={() => window.location.reload()}
      >
        Add another book
      </button>
    </div>
  );
}
