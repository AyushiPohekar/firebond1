import { useState } from "react";
import { Original } from "./Original";
import { Boolean } from "./Boolean";
import { Argument } from "./Argument";
import { Close } from "./Close";

export function And({ handleClose, list }) {
  const [selectedOptions, setSelectedOptions] = useState(["", ""]);
  console.log(selectedOptions);
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
        {selectedOptions.map((option, index) => option === "constant" ? (
          <Boolean
            key={index}
            handleClose={handleClose}
            handleBoolean={(event) => handleOptionChangeForIndex(event, index)} />
        ) : option === "argument" ? (
          <Argument
            key={index}
            handleClose={handleClose}
            list={list}
            handleOptionChange={(event) => handleOptionChangeForIndex(event, index)} />
        ) : option === "and" ? (
          <And
            key={index}
            handleClose={handleClose}
            list={list}
            handleOptionChange={(event) => handleOptionChangeForIndex(event, index)} />
        ) : (

          <Original
            key={index}
            handleOptionChange={(event) => handleOptionChangeForIndex(event, index)} />
        )
        )}
        {!hasAndOption && (
          <button onClick={handleAddOp}>+ add op</button>
        )}
      </div>

    </>
  );
}
