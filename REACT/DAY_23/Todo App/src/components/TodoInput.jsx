import { useContext, useRef } from "react";
import { todoItemsContext } from "../store/todo-item-store";

function TodoInput() {
  const { addNewItem } = useContext(todoItemsContext);
  const todoNameElement = useRef();
  const todoDateElement = useRef();
  
  function handleOnBtnClicked(event) {
    event.preventDefault();
    let todoName = todoNameElement.current.value;
    let todoDate = todoDateElement.current.value;
    addNewItem(todoName, todoDate);
    todoDateElement.current.value = "";
    todoNameElement.current.value = "";
  }
  return (
    <form className="container text-start" onSubmit={handleOnBtnClicked}>
      <div className="row m-3">
        <div className="col-5">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="Enter Todo here"
          />
        </div>
        <div className="col-3">
          <input type="date" ref={todoDateElement} />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success todo-btn">
            Add
          </button>
        </div>
      </div>
    </form>
  );
}

export default TodoInput;
