function TodoItem({ name, date,handleDeleteBtn }) {
  return (
    <div className="container-item text-start">
      <div className="row m-3">
        <div className="col-5">{name}</div>
        <div className="col-3">{date}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger todo-btn"
            onClick={() => handleDeleteBtn(name)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem;
