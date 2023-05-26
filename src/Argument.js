import { Close } from "./Close";

export function Argument({ handleClose, list }) {
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
