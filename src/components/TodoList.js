import React from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'
import { connect, useSelector } from "react-redux"
import { addTodo, updateTodo, removeTodo, completeTodo } from "../redux/actions"

function TodoList(props) {
    const todos = useSelector(state => state.todos.todos);
    
    return (
        <div>
            <h1>Daily tasks App</h1>
            <TodoForm onSubmit={addTodo} />
            <Todo
                todos={todos}
                updateTodo={updateTodo}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
            />    
        </div>
    )
}

// export default TodoList;
export default connect(
    null,
    { addTodo, updateTodo, removeTodo, completeTodo }
)(TodoList);