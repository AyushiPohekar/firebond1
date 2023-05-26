import { useState } from "react";
import "./App.css";
import { Original } from "./Original";
import { Boolean } from "./Boolean";
import { Argument } from "./Argument";
import { And } from "./And";
import { Or } from "./Or";
import { UpperArgument } from "./UpperArgument";

function App() {
  const [selectedOption, setSelectedOption] = useState("");
  const [showOriginal, setShowOriginal] = useState(true);
  const [boolean, setBoolean] = useState("undefined");
  const [argument, setArgument] = useState();
  const [list, setList] = useState(["My Arg"]);

  const [showInput, setShowInput] = useState(false);
  const [item, setItem] = useState("");

  const handleAddItem = (item) => {
    setList([...list, item]);
  };

  const handleAndAdd = () => {};

  const handleAddButtonClick = () => {
    if (item.trim() !== "") {
      handleAddItem(item);
      setItem("");
      setShowInput(false);
    }
  };

  const handleInputChange = (event) => {
    setItem(event.target.value);
  };

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
        handleInputChange={handleInputChange}
        handleAddButtonClick={handleAddButtonClick}
        item={item}
        list={list}
      />
      <div className="lowerdiv">
        {showOriginal ? (
          <Original handleOptionChange={handleOptionChange} />
        ) : selectedOption === "constant" ? (
          <Boolean handleClose={handleClose} handleBoolean={handleBoolean} />
        ) : selectedOption === "argument" ? (
          <Argument handleClose={handleClose} list={list} />
        ) : selectedOption === "and" ? (
          <And
            handleClose={handleClose}
            handleBoolean={handleBoolean}
            handleOptionChange={handleOptionChange}
            handleAndAdd={handleAndAdd}
            list={list}
          />
        ) : selectedOption === "or" ? (
          <Or handleClose={handleClose} />
        ) : null}

        <div className="resultbtn">result: {boolean}</div>
      </div>
    </div>
  );
}

export default App;

