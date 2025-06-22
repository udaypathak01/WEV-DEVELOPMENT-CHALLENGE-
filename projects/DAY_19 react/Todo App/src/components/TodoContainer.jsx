import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
function TodoContainer() {
    return <div className="container text-start">
          <TodoInput></TodoInput>
          <TodoItem></TodoItem>
        </div>
}
export default TodoContainer;