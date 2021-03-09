import React from "react";
import { useSelector } from "react-redux";
import Steps from "./Steps";
import MainContent from "./MainContent";
import Buttons from "./Buttons";
import Successful from "./Successful";

function App() {
  const activeStep = useSelector((state) => state.setActiveStep.count);
  const countStep = useSelector((state) => state.countStep.count);

  return (
    <div className="container">
      {activeStep > countStep ? (
        <Successful />
      ) : (
        <>
          <Steps />
          <MainContent />
          <Buttons />
        </>
      )}
    </div>
  );
}

export default App;
