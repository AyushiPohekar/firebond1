import { Close } from "./Close";

export function Boolean({ handleClose, handleBoolean }) {
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
