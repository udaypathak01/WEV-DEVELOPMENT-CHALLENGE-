import { useContext } from "react";
import { todoItemsContext } from "../store/todo-item-store";

function EmptyMess() {
  const contextObj = useContext(todoItemsContext);
  const todoArr = contextObj.todos;
  return todoArr.length === 0 && <h3>Please Enter Your Todos...</h3>;
}
export default EmptyMess;
