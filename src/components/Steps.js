import React from "react";
import { useSelector } from "react-redux";
import Stepper from "react-stepper-horizontal";
import img from "../img/three-dots.svg";

export default function Steps() {
  const activeStep = useSelector((state) => state.setActiveStep.count);
  const errMessage = useSelector((state) => state.errorStep.message);
  const subGenre = useSelector((state) => state.selectSubGenre.subGenre);
  const chkSub =
    subGenre !== "Add new"
      ? [
          { title: errMessage !== "" ? errMessage : "Genre" },
          { title: "Subgenre" },
          { title: "Information" },
        ]
      : [
          { title: errMessage !== "" ? errMessage : "Genre" },
          { title: "Subgenre" },
          { title: "Add new subgenre" },
          { title: "Information" },
        ];

  const steps =
    activeStep < 2
      ? [
          {
            title: errMessage !== "" && activeStep === 0 ? errMessage : "Genre",
          },
          {
            title:
              errMessage !== "" && activeStep === 1 ? errMessage : "Subgenre",
          },
          { title: "", icon: img },
        ]
      : chkSub;

  return (
    <div>
      <Stepper
        steps={steps}
        activeStep={activeStep}
        size={50}
        completeColor="lightgray"
        activeColor={errMessage !== "" ? "red" : "gray"}
        activeTitleColor={errMessage !== "" ? "red" : "gray"}
      />
    </div>
  );
}
