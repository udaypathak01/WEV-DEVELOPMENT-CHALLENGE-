import style from "./Display.module.css";
export function Display({ displayVal }) {
  return (
    <input
      type="text"
      readOnly
      className={style.cal_input}
      value={displayVal}
    />
  );
}
