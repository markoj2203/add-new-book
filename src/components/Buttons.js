import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Buttons() {
  const activeStep = useSelector((state) => state.setActiveStep.count);
  const dispatch = useDispatch();

  const nextStep = () => {
    if (activeStep < 3) {
      //   let genreArr = data.filter(function (item) {
      //     return item.name === genre;
      //   });
      //   setSubGenreData(genreArr[0].subgenres);
      dispatch({ type: "NEXT_STEP" });
    }
  };

  const backStep = () => {
    if (activeStep !== 0) dispatch({ type: "BACK_STEP" });
  };
  return (
    <div className="step-buttons">
      <button
        type="button"
        className="btn btn-outline-secondary"
        onClick={() => backStep()}
      >
        Back
      </button>
      <button
        type="button"
        className="btn btn-secondary"
        onClick={() => nextStep()}
      >
        Next
      </button>
    </div>
  );
}
