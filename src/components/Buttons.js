import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Buttons() {
  const activeStep = useSelector((state) => state.setActiveStep.count);
  const genre = useSelector((state) => state.selectGenre.genre);
  const subGenre = useSelector((state) => state.selectSubGenre.subGenre);
  const countStep = useSelector((state) => state.countStep.count);

  const dispatch = useDispatch();

  const errStepMessage = [
    { message: "Must select Genre!" },
    { message: "Must select add new Sub Genre!" },
  ];

  const nextStep = () => {
    if (activeStep <= countStep) {
      if (checkNextStep(activeStep) === true) {
        dispatch({ type: "ERROR_STEP", message: "" });
        dispatch({ type: "NEXT_STEP" });
      } else {
        dispatch({
          type: "ERROR_STEP",
          message: errStepMessage[activeStep].message,
        });
      }
    }
  };

  const checkNextStep = (activeStep) => {
    let nextChk = false;
    if (activeStep === 0 && genre !== "") {
      nextChk = true;
    } else if (activeStep === 1 && subGenre !== "") {
      nextChk = true;
    } else if (activeStep === 2) {
      nextChk = true;
    } else if (activeStep === 3) {
      nextChk = true;
    }

    return nextChk;
  };

  const backStep = () => {
    if (activeStep !== 0) {
      dispatch({ type: "BACK_STEP" });
      dispatch({ type: "ERROR_STEP", message: "" });
    }
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
        {activeStep < countStep ? "Next" : "Add"}
      </button>
    </div>
  );
}
