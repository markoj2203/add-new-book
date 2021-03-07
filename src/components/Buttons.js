import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Buttons() {
  const activeStep = useSelector((state) => state.setActiveStep.count);
  const genre = useSelector((state) => state.selectGenre.genre);
  const subGenre = useSelector((state) => state.selectSubGenre.subGenre);

  const dispatch = useDispatch();

  const nextStep = () => {
    if (activeStep < 3) {
      if (checkNextStep(activeStep) === true) {
        dispatch({ type: "NEXT_STEP" });
      } else {
        console.log("error");
      }
    }
  };

  const checkNextStep = (activeStep) => {
    let nextChk = false;
    if (activeStep === 0 && genre !== "") {
      nextChk = true;
    } else if (activeStep === 1 && subGenre !== "" && subGenre === "Add new") {
      nextChk = true;
    }

    return nextChk;
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
