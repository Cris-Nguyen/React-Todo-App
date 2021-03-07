import { ADD_TODO, UPDATE_TODO, REMOVE_TODO, COMPLETE_TODO } from "./actionTypes"

export const addTodo = (value) => ({
    type: ADD_TODO,
    payload: {
      value
  }
});
  
export const updateTodo = (id, newValue) => ({
    type: UPDATE_TODO,
    payload: { 
        id,
        newValue
    }
});

export const removeTodo = id => ({
    type: REMOVE_TODO,
    payload: {
      id
    }
});

export const completeTodo = id => ({
    type: COMPLETE_TODO,
    payload: {
      id
    }
});