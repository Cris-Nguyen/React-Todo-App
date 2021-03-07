import { ADD_TODO, UPDATE_TODO, REMOVE_TODO, COMPLETE_TODO } from "../actionTypes";

const initialState = {
  todos: [],
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const { value } = action.payload;
      if  (!value.text || /^\s*$/.test(value.text)) {
        return {
          ...state
        }
      }
      return {
        ...state,
        todos: [value, ...state.todos]
      }
    }
    
    case UPDATE_TODO: {
      const { id, newValue } = action.payload;
      console.log(id, newValue);
      const newList = state.todos.slice().map(item => (item.id === id ? newValue : item));
      if (!newValue.text || /^\s*$/.test(newValue.text)) {
        return {
          ...state
        }
      }
      return {
        ...state,
        todos: newList
      }
    }
    
    case REMOVE_TODO: {
      const { id } = action.payload;
      return {
        ...state,
        todos: [...state.todos].filter(todo => todo.id !== id)
      }
    }

    case COMPLETE_TODO: {
        const { id } = action.payload;
        console.log(id);
        return {
          ...state,
          // eslint-disable-next-line
          todos: state.todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
          })
        }
    }
    
    default:
      return state;
  }
}

export default todosReducer;