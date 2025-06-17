let stored = localStorage.getItem("todoItem");
let todoList = [];
displayItems();
function addTodo() {
  let inputElement = document.querySelector("#todo-input-text");
  let dateElement = document.querySelector("#todo-date");
  let todoItem = todoList.push({
    item: inputElement.value,
    date: dateElement.value,
  });
  localStorage.setItem("todoItem", JSON.stringify(todoList));// save array data to local storage
  
  inputElement.value = "";
  dateElement.value = "";
  displayItems();
}

function displayItems() {
  let containerElement = document.querySelector("#todo-container");
  let newHtml = "";
  for (let i = 0; i < todoList.length; i++) {
    let { item, date } = todoList[i];
    newHtml += `<div>
    <span>${item}</span>
    <span>${date}</span>
      <button onclick="todoList.splice(${i},1); displayItems();" class="button-delete">Delete</button>
      </div>`;
  }
  containerElement.innerHTML = newHtml;
}
