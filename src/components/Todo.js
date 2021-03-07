import React, { useState } from 'react'
import { RiCloseCircleLine } from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti'
import TodoForm from './TodoForm';
import { useDispatch } from "react-redux"

function Todo({todos, completeTodo, removeTodo, updateTodo}) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

    const dispatch = useDispatch();

    const submitUpdate = value => {
        const action = updateTodo(edit.id, value);
        setEdit({
           id: null,
           value: '' 
        });
        return action;
    }

    const handleCompleteTodo = (id) => {
        const action = completeTodo(id);
        dispatch(action);
    }

    const handleRemoveTodo = (id) => {
        const action = removeTodo(id);
        dispatch(action);
    }

    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />
    }

    return todos.map((todo, index) => (
        <div className={todo.isComplete ? 'todo-row complete' : 
        'todo-row'} key={index}>
            <div key={todo.id} onClick={() => handleCompleteTodo(todo.id)}>
                {todo.text}
            </div>
            <div className="icons">
                <RiCloseCircleLine 
                    onClick={() => handleRemoveTodo(todo.id)}
                    className='delete-icon'
                />
                <TiEdit 
                    onClick={() => setEdit({id: todo.id, value: todo.text})}
                    className='edit-icon'
                />
            </div>
        </div>
    ));
}

export default Todo;