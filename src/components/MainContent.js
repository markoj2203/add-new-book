import React from "react";
import { useSelector } from "react-redux";
import Genre from "./Genre";
import Subgenre from "./Subgenre";

export default function MainContent() {
  const activeStep = useSelector((state) => state.setActiveStep.count);
  return (
    <div className="step-content">
      {activeStep === 0 ? <Genre /> : null}
      {activeStep === 1 ? <Subgenre /> : null}
    </div>
  );
}
