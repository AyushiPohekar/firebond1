import { useState } from "react";
import "./App.css";

function App() {
  const [selectedOption, setSelectedOption] = useState("");
  const [showOriginal, setShowOriginal] = useState(true);
  const [boolean, setBoolean] = useState("undefined");
  const [argument,setArgument]=useState()

  const handleBoolean = (event) => {
    setBoolean(event.target.value);
  };


  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    setShowOriginal(false);
  };

  const handleClose = () => {
    setShowOriginal(true);
    setSelectedOption("");
  };

  return (
    <div className="App">
      {showOriginal ? (
        <Original handleOptionChange={handleOptionChange} />
      ) : selectedOption === "constant" ? (
        <Boolean handleClose={handleClose} handleBoolean={handleBoolean} />
      ) : selectedOption === "argument" ? (
        <Argument handleClose={handleClose} />
      ) : selectedOption === "and" ? (
        <And handleClose={handleClose} />
      ) : selectedOption === "or" ? (
        <Or handleClose={handleClose} />
      ) : null}

      <div>result:{boolean}</div>
    </div>
  );
}

function Original({ handleOptionChange }) {
  return (
    <>
      <select onChange={handleOptionChange}>
        <option value="">-- select --</option>
        <option value="constant">Constant</option>
        <option value="argument">Argument</option>
        <option value="and">And</option>
        <option value="or">Or</option>
      </select>
      <button>X</button>
    </>
  );
}

function Boolean({ handleClose,handleBoolean }) {
  return (
    <>
       <select onChange={handleBoolean}>
      <option value="true">true</option>
      <option value="false">false</option>
    </select>
      <button onClick={handleClose}>X</button>
    </>
  );
}

function Argument({ handleClose }) {
  return (
    <>
      <div>Argument Component</div>
      <button onClick={handleClose}>X</button>
    </>
  );
}

function And({ handleClose }) {
  return (
    <>
      <div>And Component</div>
      <button onClick={handleClose}>X</button>
    </>
  );
}

function Or({ handleClose }) {
  return (
    <>
      <div>Or Component</div>
      <button onClick={handleClose}>X</button>
    </>
  );
}

function UpperArgument(){
  <>
  <input/>
  <Boolean/>
  </>
}

export default App;

