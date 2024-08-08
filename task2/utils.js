export const removeTodo = (todos, index) => {
    todos.splice(index, 1);
    return todos;
};
