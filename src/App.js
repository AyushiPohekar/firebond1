import { useState } from "react";
import "./App.css";

function App() {
  const [selectedOption, setSelectedOption] = useState("");
  const [showOriginal, setShowOriginal] = useState(true);
  const [boolean, setBoolean] = useState("undefined");
  const [argument, setArgument] = useState();
  const [list, setList] = useState(["My Arg"]);
  console.log(list);
  const [showInput, setShowInput] = useState(false);
  const [item, setItem] = useState("");

  const handleAddItem = (item) => {
    setList([...list, item]);
  };

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
          <Argument handleClose={handleClose} list={list}/>
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

function Argument({ handleClose,list }) {
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

function And({ handleClose }) {
  return (
    <>
     
       <Close handleClose={handleClose} />
      <Original/>
      <Original/>
     <button>+ add op</button>
   
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
  list
}) {
  return (
    <>
      <div>
   
      

      {list.map((item,index)=>{
        return(
          <div className="listdiv">
          <span key={index}>{item}</span>
          <select onChange={handleBoolean}>
        <option value="true">true</option>
        <option value="false">false</option>
         </select>
          </div>
        )
      })}
     
      

        
        <div className="showInputdiv">
          {showInput ? (
            <>
              <input type="text" value={item} onChange={handleInputChange} />
             
              <button onClick={handleAddButtonClick}>Add</button>
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
