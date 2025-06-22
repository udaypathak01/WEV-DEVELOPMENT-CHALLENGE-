let todo = "buy milk";
let date = "20/07/2005";

function TodoItem() {
  return (
    <div className="container-item text-start">
      <div className="row m-3">
        <div className="col-5">{todo}</div>
        <div className="col-3">{date}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger todo-btn">
            Delete
          </button>
        </div>



      </div>
    </div>
  );
}
export default TodoItem;
