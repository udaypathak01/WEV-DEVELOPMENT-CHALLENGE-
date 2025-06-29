import { useState } from "react";

function TodoInput({ handleOnNewItem }) {
  let [todoName, setTodoName] = useState("");
  let [todoDate, setTodoDate] = useState("");

  function onchangeName(event) {
    setTodoName(event.target.value);
  }
  function onchangeDate(event) {
    setTodoDate(event.target.value);
  }
  function handleOnBtnClicked() {
    handleOnNewItem(todoName, todoDate);
    setTodoName("");
    setTodoDate("");
  }
  return (
    <div className="row m-3">
      <div className="col-5">
        <input
          type="text"
          placeholder="Enter Todo here"
          onChange={() => onchangeName(event)}
          value={todoName}
        />
      </div>
      <div className="col-3">
        <input
          type="date"
          onChange={() => onchangeDate(event)}
          value={todoDate}
        />
      </div>
      <div className="col-2">
        <button
          type="button"
          className="btn btn-success todo-btn"
          onClick={handleOnBtnClicked}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default TodoInput;
