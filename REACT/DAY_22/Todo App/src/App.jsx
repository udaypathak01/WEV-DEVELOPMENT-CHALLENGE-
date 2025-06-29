import AppName from "./components/AppName";
import TodoContainer from "./components/TodoContainer";
import "./App.css";
import EmptyMess from "./components/EmptyMess";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  function handleOnNewItem(name, date) {
    let newItem = [...todos, { name: name, date: date }];
    setTodos(newItem);
  }
  function handleDeleteBtn(todoName) {
    const newTodoItems = todos.filter((item) => item.name !== todoName);

    setTodos(newTodoItems);
  }
  return (
    <>
      <center className="todo-container">
        <AppName></AppName>
        <TodoContainer
          todoArr={todos}
          handleOnNewItem={handleOnNewItem}
          handleDeleteBtn={handleDeleteBtn}
        ></TodoContainer>
        {todos.length === 0 && <EmptyMess />}
      </center>
    </>
  );
}

export default App;
