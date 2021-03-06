import React from "react";
import { useSelector } from "react-redux";
import Genre from "./Genre";
import Subgenre from "./Subgenre";
import NewSubGenre from "./NewSubGenre";
import Information from "./Information";

export default function MainContent() {
  const activeStep = useSelector((state) => state.setActiveStep.count);
  const subGenre = useSelector((state) => state.selectSubGenre.subGenre);
  const chk = subGenre === "Add new" ? <NewSubGenre /> : <Information />;
  return (
    <div className="step-content">
      {activeStep === 0 ? <Genre /> : null}
      {activeStep === 1 ? <Subgenre /> : null}
      {activeStep === 2 ? chk : null}
      {activeStep === 3 ? <Information /> : null}
    </div>
  );
}
