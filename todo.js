let todoList = {
    todos: [],
    displayTodos: function(){
        if (this.todos.length === 0) {
            console.log(`Nice! You've caught up with your todos!`);
        } else {
            for (let i = 0; i < this.todos.length; i++) {
                if (this.todos[i].completed === true) {
                    console.log('(X)',`${this.todos[i].text} ${this.todos[i].id} ${this.todos[i].due} 
                    ${this.todos[i].priority} ${this.todos[i].completed}`);
                } else {
                    console.log('()',`${this.todos[i].text} ${this.todos[i].id} ${this.todos[i].due} 
                    ${this.todos[i].priority} ${this.todos[i].completed}`);
                }
            }
        }
    },
    addTodo: function(todoText) {
        this.todos.push({
            text: todoText,
            id: 'text_' + Date.now,
            due: null,
            priority: null,
            completed: false
        });
        this.displayTodos();
    },
    changeTodo: function(position, text) {
        this.todos[position].text = text;
        this.displayTodos();
    },
    deleteTodo: function(position) {
        this.todos.splice(position, 1);
        this.displayTodos();
    },
    toggleCompleted: function(position) {
        let todo = this.todos[position];
        todo.completed = !todo.completed;
        this.displayTodos();
    },

    toggleAll: function() {
        let totalTodos = this.todos.length;
        let completedTodos = 0;

        for (let i = 0; i < totalTodos; i++) {
            if (this.todos[i].completed === true) {
                completedTodos++;
            } 
        }

        if (completedTodos === totalTodos) {
            for (let i = 0; i < totalTodos; i++) {
                this.todos[i].completed = false;
            } 
        } else {
            for (let i = 0; i < totalTodos; i++) {
                this.todos[i].completed = true;
            }
        }
        
        this.displayTodos();
    }
};


    
