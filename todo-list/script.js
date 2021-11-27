const todo = document.getElementById("todo-result");

function add() {
    let newText = document.getElementById("new-text");
    let newTodo = `<li><span onclick="toggle(this)">${newText.value}</span> <span onclick="remove(this)"> [x] </span></li>`;

    todo.insertAdjacentHTML("afterbegin", newTodo);
    newText.value = "";
}

function toggle(el) {
    el.classList.toggle("done");
}

function remove(el) {
    el.parentElement.remove()
}

