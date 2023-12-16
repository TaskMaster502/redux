const counterinitialState = {
  value: 0,
  
};
const todoInitialState = {
  todos: []
}

export const counterReducer = (state = counterinitialState, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, value: state.value + 1 };
    case "decrement":
      return { ...state, value: state.value - 1 };
    case "reset":
      return { ...state, value: 0 };
    default:
      return state;
  }
};
export const todoReducer = (state = todoInitialState, action) => {
  switch (action.type) {
    case "addtodo":
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: state.todos.length,
            text: action.payload.text,
            completed: false,
          },
        ],
      };
    case "toggletodo":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    default:
      return state;
  }
};
