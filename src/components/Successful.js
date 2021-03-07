import React from "react";
import { useDispatch } from "react-redux";
import img from "../img/check-circle.svg";

export default function Successful() {
  const dispatch = useDispatch();
  return (
    <div className="successful">
      <img src={img} alt=""></img>
      <label style={{ marginTop: "5%" }}>Book added successfuly</label>
      <button
        style={{ marginTop: "5%" }}
        type="button"
        className="btn btn-secondary"
        onClick={() => dispatch({ type: "BACK_STEP" })}
      >
        Add another book
      </button>
    </div>
  );
}
