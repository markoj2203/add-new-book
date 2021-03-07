import React from "react";
import { useSelector } from "react-redux";
/*import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";*/
import Stepper from "react-stepper-horizontal";
import img from "../img/three-dots.svg";

export default function Steps() {
  const activeStep = useSelector((state) => state.setActiveStep.count);

  const steps =
    activeStep < 2
      ? [{ title: "Genre" }, { title: "Subgenre" }, { title: "", icon: img }]
      : [
          { title: "Genre" },
          { title: "Subgenre" },
          { title: "Add new subgenre" },
          { title: "Information" },
        ];

  return (
    <div>
      <Stepper
        steps={steps}
        activeStep={activeStep}
        size={50}
        activeColor="#6c757d"
        completeColor="lightgray"
      />
      {/* <Stepper activeStep={activeStep} alternativeLabel>
        <Step>
          <StepLabel>Genre</StepLabel>
        </Step>
        <Step>
          <StepLabel>Subgenre</StepLabel>
        </Step>
        <Step>
          <StepLabel icon={activeStep < 2 ? "..." : activeStep}>
            {activeStep < 2 ? "" : "Add new subgenre"}
          </StepLabel>
        </Step>
        <Step disabled={true}>
          <StepLabel>{activeStep < 2 ? "" : "Information"}</StepLabel>
        </Step>
      </Stepper> */}
    </div>
  );
}
