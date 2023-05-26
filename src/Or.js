import { Close } from "./Close";

export function Or({ handleClose }) {
  return (
    <>
      <div>Or Component</div>
      <Close handleClose={handleClose} />
    </>
  );
}
