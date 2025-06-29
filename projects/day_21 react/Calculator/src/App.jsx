import style from "./App.module.css";
import { Display } from "./components/display";
import { ButtonBox } from "./components/ButtonBox";
import { useState } from "react";

function App() {
  const [calVal, setCalVal] = useState("");

  let handleOnBtnClick = (event) => {
    let btnVal = event.target.innerText;
    setCalVal(btnVal);
    if (btnVal === "C") {
      setCalVal("");
    } else if (btnVal === "=") {
      let result = eval(calVal);
      setCalVal(result);
    } else {
      let newVal = calVal + btnVal;
      setCalVal(newVal);
    }
  };
  return (
    <div className={style.calculator}>
      <Display displayVal={calVal} />
      <ButtonBox handleOnBtnClick={handleOnBtnClick} />
    </div>
  );
}

export default App;
