import React, { useState } from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import { dataObject } from "../data-object.js";

const data = dataObject.genres;

function App() {
  const [activeStep, setActiveStep] = useState(0);
  const [genre, setGenre] = useState("");
  const [subGenre, setSubGenre] = useState("");
  const [subGenreData, setSubGenreData] = useState("");
  const [error, setError] = useState("");

  const nextStep = () => {
    if (activeStep < 3) {
      //if(activeStep === 0 && )
      let genreArr = data.filter(function (item) {
        return item.name === genre;
      });
      setSubGenreData(genreArr[0].subgenres);
      setActiveStep((currentStep) => currentStep + 1);
    }
  };

  const backStep = () => {
    if (activeStep !== 0) setActiveStep((currentStep) => currentStep - 1);
  };

  const selectGenre = (event) => {
    setGenre(event.target.innerText);
  };

  return (
    <div className="container">
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

      <div className="step-content">
        {activeStep === 0 ? (
          <div className="row">
            {data.map((item, i) => (
              <div key={i} className="col-3 col-pos">
                <button
                  type="button"
                  className="btn btn-outline-secondary button"
                  onClick={selectGenre}
                >
                  {item.name}
                </button>
              </div>
            ))}
          </div>
        ) : null}
        {activeStep === 1 ? (
          <div className="row">
            {subGenreData.map((item, i) => (
              <div key={i} className="col col-pos">
                <button
                  type="button"
                  className="btn btn-outline-secondary button"
                  onClick={setSubGenre}
                >
                  {item.name}
                </button>
              </div>
            ))}
          </div>
        ) : null}
      </div>
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
    </div>
  );
}

export default App;
