import style from "./ButtonBox.module.css";
export function ButtonBox({handleOnBtnClick}) {
  let BtnArr = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
  ];
  return (
    <div className={style.Cal_btn_box}>
      {BtnArr.map((btnName) => (
        <button key={btnName} className={style.button} onClick={handleOnBtnClick}>{btnName}</button>
      ))}
    </div>
  );
}
