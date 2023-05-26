export function Original({ handleOptionChange }) {
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
