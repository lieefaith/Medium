class Todo {
    constructor(title) {
        this.title = title;
        this.done = false;
    }

    markAsDone() {
        this.done = true;
    }
}

class UrgentTodo extends Todo {
    constructor(title, priority) {
        super(title);
        this.priority = priority;
    }

    markAsUrgent() {
        this.priority = 'High';
    }
}

export { Todo, UrgentTodo };
