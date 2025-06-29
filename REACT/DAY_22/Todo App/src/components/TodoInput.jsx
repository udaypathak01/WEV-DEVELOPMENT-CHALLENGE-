import { useRef, useState } from "react";

function TodoInput({ handleOnNewItem }) {
  const todoNameElement = useRef();
  const todoDateElement = useRef();

  function handleOnBtnClicked(event) {
    event.preventDefault();
    let todoName = todoNameElement.current.value;
    let todoDate = todoDateElement.current.value;
    handleOnNewItem(todoName, todoDate);
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
