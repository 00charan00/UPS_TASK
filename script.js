document.getElementById("add-btn").addEventListener("click", addTodo);
document.getElementById("todo-input").addEventListener("keypress", function (e) {
    if (e.key === 'Enter') addTodo();
});

function addTodo() {
    const todoInput = document.getElementById("todo-input");
    const todoText = todoInput.value.trim();
    if (todoText === "") return;
    const newTaskDiv = document.getElementById("new-task");
    newTaskDiv.innerText = todoText;
    const todoItem = document.createElement("li");
    todoItem.className = "todo-item";
    todoItem.innerHTML = `
    <span>${todoText}</span>
    <button onclick="deleteTodo(this)">X</button>
  `;

    todoItem.addEventListener("click", () => {
        todoItem.classList.toggle("completed");
    });

    document.getElementById("todo-list").appendChild(todoItem);
    todoInput.value = "";
}

function deleteTodo(button) {
    button.parentElement.remove();
}



