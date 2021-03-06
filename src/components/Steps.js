import React from "react";
import { useSelector } from "react-redux";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";

export default function Steps() {
  const activeStep = useSelector((state) => state.setActiveStep.count);
  return (
    <div>
      <Stepper activeStep={activeStep} alternativeLabel>
        <Step>
          <StepLabel>Genre</StepLabel>
        </Step>
        <Step>
          <StepLabel>Subgenre</StepLabel>
        </Step>
        <Step>
          <StepLabel>Add new subgenre</StepLabel>
        </Step>
        <Step>
          <StepLabel>Information</StepLabel>
        </Step>
      </Stepper>
    </div>
  );
}
