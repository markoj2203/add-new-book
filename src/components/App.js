import React from "react";
import Steps from "./Steps";
import MainContent from "./MainContent";
import Buttons from "./Buttons";

function App() {
  // const [genre, setGenre] = useState("");
  // const [subGenre, setSubGenre] = useState("");
  // const [subGenreData, setSubGenreData] = useState("");
  // const [error, setError] = useState("");

  return (
    <div className="container">
      <Steps />
      <MainContent />
      <Buttons />
    </div>
  );
}

export default App;
