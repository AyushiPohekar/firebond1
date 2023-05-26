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
