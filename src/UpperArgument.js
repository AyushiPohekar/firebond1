import "./App.css"

export function UpperArgument({
  handleBoolean, handlePlus, showInput, handleInputChange, handleAddButtonClick, item, list,
}) {
  return (
    <>
      <div>
        {list.map((item, index) => {
          return (
            <div className="listdiv" key={index}>
              <span>{item}</span>
              <div>
              <select onChange={handleBoolean}>
                <option value="true">true</option>
                <option value="false">false</option>
              </select>
              </div>
            </div>
          );
        })}

        <div className="showInputdiv">
          {showInput ? (
            <div className="showInputInnerdiv">
              <input type="text" value={item} onChange={handleInputChange} />

              <button onClick={handleAddButtonClick}>Add</button>
            </div>
          ) : null}
          <div>
          <button onClick={handlePlus}>+ add arg</button>
          </div>
          
        </div>
      </div>
    </>
  );
}
