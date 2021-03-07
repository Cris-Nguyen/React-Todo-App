import { combineReducers } from "redux"
import todosReducer from "./TodoList";

export default combineReducers({ todos: todosReducer });