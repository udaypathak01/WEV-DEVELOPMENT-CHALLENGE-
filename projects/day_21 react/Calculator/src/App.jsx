import style from "./App.module.css";
import { Display } from "./components/display";
import { ButtonBox } from "./components/ButtonBox";

function App() {
  
  return (
    <div className={style.calculator}>
     
      <Display />
      <ButtonBox />
    </div>
  );
}

export default App;
