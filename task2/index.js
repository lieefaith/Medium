import { removeTodo } from './utils.js';
import { Todo, UrgentTodo } from './todo.js';

const appTitle = "My To-do List";
let todos = [];

const addTodo = (todo) => {
    todos.push(todo);
    renderTodos();
    return todos;
};

const fetchTodos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(["Learn JavaScript", "Go Shopping"]);
        }, 2000);
    });
};

const getTodos = async () => {
    const fetchedTodos = await fetchTodos();
    todos = [...todos, ...fetchedTodos.map(title => new Todo(title))];
    renderTodos();
};

const renderTodos = () => {
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = todos.map((todo, index) => `
        <li>
            ${todo.title} - ${todo.done ? 'Done' : 'Not Done'}
            <button onclick="markAsDone(${index})">Mark as Done</button>
            <button onclick="remove(${index})">Remove</button>
        </li>
    `).join('');
};

const markAsDone = (index) => {
    todos[index].markAsDone();
    renderTodos();
};

window.markAsDone = markAsDone;

const remove = (index) => {
    todos = removeTodo(todos, index);
    renderTodos();
};

window.remove = remove;

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('add-todo-form').addEventListener('submit', (event) => {
        event.preventDefault();
        const todoTitle = event.target.elements['todo-title'].value;
        addTodo(new Todo(todoTitle));
        event.target.reset();
    });

    getTodos();
});
