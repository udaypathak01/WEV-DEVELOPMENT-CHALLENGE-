import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

function TodoContainer({ todoArr, handleOnNewItem, handleDeleteBtn }) {
  return (
    <>
      <TodoInput handleOnNewItem={handleOnNewItem}></TodoInput>
      {todoArr.map((item) => (
        <TodoItem
          key={item.name}
          name={item.name}
          date={item.date}
          handleDeleteBtn={handleDeleteBtn}
        />
      ))}
    </>
  );
}
export default TodoContainer;
