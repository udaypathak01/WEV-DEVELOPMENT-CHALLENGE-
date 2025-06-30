import { useContext } from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import { todoItemsContext } from "../store/todo-item-store";

function TodoContainer({ handleOnNewItem }) {
  const contextObj = useContext(todoItemsContext);
  const todoArr = contextObj.todos;
  return (
    <>
      <TodoInput></TodoInput>
      {todoArr.map((item) => (
        <TodoItem key={item.name} name={item.name} date={item.date} />
      ))}
    </>
  );
}
export default TodoContainer;
