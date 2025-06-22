import AppName from "./components/AppName";
import TodoContainer from "./components/TodoContainer";
import "./App.css";
function App() {
  return (
    <>
      <center className="todo-container">
       <AppName></AppName>
        <TodoContainer></TodoContainer>
      </center>
    </>
  );
}

export default App;
