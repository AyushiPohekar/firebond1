import { useState } from "react";
import "./App.css";

function App() {
  const [selectedOption, setSelectedOption] = useState("");
  const [showOriginal, setShowOriginal] = useState(true);
  const [boolean, setBoolean] = useState("undefined");
  const [argument, setArgument] = useState();
  const [list, setList] = useState(["My Arg"]);
  console.log(list)
  const [showInput, setShowInput] = useState(false);
  const [input, setInput] = useState("");

 


  const handlePlus = () => {
    setShowInput(true);
  };


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
      <UpperArgument
        handleBoolean={handleBoolean}
        handlePlus={handlePlus}
        showInput={showInput}
     
        input={input}
      
      />
      <div className="lowerdiv">
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

function Boolean({ handleClose, handleBoolean }) {
  return (
    <>
      <select onChange={handleBoolean}>
        <option value="true">true</option>
        <option value="false">false</option>
      </select>
      <Close handleClose={handleClose} />
    </>
  );
}

function Argument({ handleClose }) {
  return (
    <>
      <div>Argument Component</div>
      <Close handleClose={handleClose} />
    </>
  );
}

function And({ handleClose }) {
  return (
    <>
      <div>And Component</div>
      <Close handleClose={handleClose} />
    </>
  );
}

function Or({ handleClose }) {
  return (
    <>
      <div>Or Component</div>
      <Close handleClose={handleClose} />
    </>
  );
}

function UpperArgument({ handleBoolean, handlePlus, showInput}) {

  return (
    <>
      <div>
        <span style={{ border: "1px solid black", width: "max-content" }}>
          My Argument
        </span>

        <select onChange={handleBoolean}>
          <option value="true">true</option>
          <option value="false">false</option>
        </select>
        <div className="showInputdiv">
          {showInput ? (
            <>
              <input type="text"/>
              <button>Add</button>
            </>
          ) : null}
          <button onClick={handlePlus}>+add arg</button>
        </div>
      </div>
    </>
  );
}

function Close({ handleClose }) {
  return <button onClick={handleClose}>X</button>;
}

export default App;
