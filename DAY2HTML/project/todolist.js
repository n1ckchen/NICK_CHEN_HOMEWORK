const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    addTodo(input.value);
    input.value = '';
});

function addTodo(todoText) {
    const li = document.createElement('li');

    const todo = document.createElement('todo');
    todo.textContent = todoText;
    li.appendChild(todo);

    const checkButton = document.createElement('button');
    checkButton.textContent = '✓';
    checkButton.addEventListener('click', function() {
        todo.classList.toggle('completed');
    });
    li.appendChild(checkButton);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
        todoList.removeChild(li);
    });
    li.appendChild(deleteButton);

    todoList.appendChild(li);
}