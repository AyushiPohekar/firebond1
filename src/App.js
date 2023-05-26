import { useState } from "react";
import "./App.css";

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
            handleOptionChange={handleOptionChange}
            handleAndAdd={handleAndAdd}
            list={list}
          />
        ) : selectedOption === "or" ? (
          <Or handleClose={handleClose} />
        ) : null}

        <div>result: {boolean}</div>
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

function Argument({ handleClose, list }) {
  return (
    <>
      <select>
        {list.map((item, index) => (
          <option key={index}>{item}</option>
        ))}
      </select>
      <Close handleClose={handleClose} />
    </>
  );
}

function And({ handleClose, handleOptionChange, list }) {
  const [selectedOptions, setSelectedOptions] = useState(["", ""]);
  console.log(selectedOptions)
  const handleOptionChangeForIndex = (event, index) => {
    const updatedOptions = [...selectedOptions];
    updatedOptions[index] = event.target.value;
    setSelectedOptions(updatedOptions);
  };

  const handleAddOp = () => {
    setSelectedOptions([...selectedOptions, ""]);
  };
  
  const hasAndOption = selectedOptions.includes("and");
  return (
    <>
      <div>
        <select>
          <option value="and">And</option>
          <option value="or">Or</option>
        </select>
        <Close handleClose={handleClose} />
      </div>
      <div>
        {selectedOptions.map((option, index) =>
          option === "constant" ? (
            <Boolean
            key={index}
            handleClose={handleClose}
            handleBoolean={(event) =>
              handleOptionChangeForIndex(event, index)
            }
          />
          ) : option === "argument" ? (
            <Argument
              key={index}
              handleClose={handleClose}
              list={list}
              handleOptionChange={(event) =>
                handleOptionChangeForIndex(event, index)
              }
            />
          ) :option === "and" ?(
            <And
            key={index}
            handleClose={handleClose}
            list={list}
            handleOptionChange={(event) =>
              handleOptionChangeForIndex(event, index)
            }
          />
          ): (
           
            <Original
              key={index}
              handleOptionChange={(event) =>
                handleOptionChangeForIndex(event, index)
              }
            />
          )
        )}
         {!hasAndOption && (
        <button onClick={handleAddOp}>+ add op</button>
      )}
      </div>
     
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

function UpperArgument({
  handleBoolean,
  handlePlus,
  showInput,
  handleInputChange,
  handleAddButtonClick,
  item,
  list,
}) {
  return (
    <>
      <div>
        {list.map((item, index) => {
          return (
            <div className="listdiv" key={index}>
              <span>{item}</span>
              <select onChange={handleBoolean}>
                <option value="true">true</option>
                <option value="false">false</option>
              </select>
            </div>
          );
        })}

        <div className="showInputdiv">
          {showInput ? (
            <>
              <input type="text" value={item} onChange={handleInputChange} />

              <button onClick={handleAddButtonClick}>Add</button>
            </>
          ) : null}
          <button onClick={handlePlus}>+ add arg</button>
        </div>
      </div>
    </>
  );
}

function Close({ handleClose }) {
  return <button onClick={handleClose}>X</button>;
}

export default App;

