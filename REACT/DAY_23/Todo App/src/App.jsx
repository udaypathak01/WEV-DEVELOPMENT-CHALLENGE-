import AppName from "./components/AppName";
import TodoContainer from "./components/TodoContainer";
import EmptyMess from "./components/EmptyMess";
import { todoItemsContext } from "./store/todo-item-store";
import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  function addNewItem(name, date) {
    let newItem = [...todos, { name: name, date: date }];
    setTodos(newItem);
  }
  function deleteItem(todoName) {
    const newTodoItems = todos.filter((item) => item.name !== todoName);

    setTodos(newTodoItems);
  }
  return (
    <todoItemsContext.Provider
      value={{ todos: todos, addNewItem: addNewItem, deleteItem: deleteItem }}
    >
      <center className="todo-container">
        <AppName />
        <TodoContainer />
        <EmptyMess />
      </center>
    </todoItemsContext.Provider>
  );
}

export default App;
