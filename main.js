// 初始變數
let list = document.querySelector("#my-todo");
let addBtn = document.querySelector("#addBtn");
let input = document.querySelector("#newTodo");
let done = document.querySelector("#my-done");

// 資料
const todos = [
  "Hit the gym",
  "Read a book",
  "Buy eggs",
  "Organize office",
  "Pay bills"
];
for (let todo of todos) {
  addItem(todo);
}

// 函式
function addItem(text) {
  let newItem = document.createElement("li");
  newItem.innerHTML = `
    <label for="todo">${text}</label>
    <i class="delete fa fa-trash"></i>
  `;
  list.appendChild(newItem);
}

//判斷空白字元
function validateInputValue() {
  let inputValue = input.value;
  if (!inputValue.trim().length > 0) {
    // 若為空白字元載入樣式
    input.classList.add("invalid", "change");
    input.placeholder = "Please input valid string";
    input.value = "";
  } else {
    addItem(inputValue);
    input.classList.remove("invalid", "change");
    input.value = "";
    input.placeholder = "Add new list.";
  }
}

//點擊addBtn新增清單
addBtn.addEventListener("click", validateInputValue);
input.addEventListener("keypress", (event) => {
  if (event.keyCode === 13) validateInputValue();
});

// Delete and check
list.addEventListener("click", function (event) {
  let target = event.target; //設置事件驅動
  let parentElement = target.parentElement;
  if (target.classList.contains("delete")) { //如果目標含有delete
    parentElement.remove(); //移除目標父元素
  } else if (target.tagName === "LABEL") {
    parentElement.remove();
    target.classList.toggle("checked"); //加上刪除線格式
    done.appendChild(parentElement);
  }
});

//將To-do List內的完成事項移動到Done List裡面
done.addEventListener("click", function (event) {
  let target = event.target;
  let parentElement = target.parentElement;
  if (target.classList.contains("delete")) {
    parentElement.remove();
  } else if (target.tagName === "LABEL") {
    parentElement.remove();
    target.classList.toggle("checked");
    list.appendChild(parentElement);
  }
});
