export const increment = () => ({
  type: "increment",
});

export const decrement = () => ({
  type: "decrement",
});

export const reset = () => ({
  type: "reset",
});

export const todoadd = (text) => ({
  type: "addtodo",
  payload: { text },
});

export const toggleTodo = (id) => ({
  type: "toggletodo",
  payload: { id },
});
