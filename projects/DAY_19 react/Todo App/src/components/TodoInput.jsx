function TodoInput() {
    return <div className="row m-3">
            <div className="col-5">
              <input type="text" placeholder="Enter Todo here" />
            </div>
            <div className="col-3">
              <input type="date" />
            </div>
            <div className="col-2">
              <button type="button" className="btn btn-success todo-btn">
                Add
              </button>
            </div>
          </div>
}



export default TodoInput;