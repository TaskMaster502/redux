import { connect } from "react-redux";
import "./App.css";
import { increment, decrement, reset } from "./action/action";
import { todoReducer} from "./reducer/reducer";
import { useState } from "react";
import { todoadd, toggleTodo } from "./action/action";

function App({
  count,
  increment,
  decrement,
  reset,
  todoadd,
  todos,
  toggleTodo,
}) {
  const [newTodo, setNewTodo] = useState("");
  const handleTodo = () => {
    if (newTodo.trim() !== "") {
      todoadd(newTodo);
      setNewTodo("");
    }
  };
  return (
    <>
      <div>
        <h3>Counter using redux</h3>
        <h1>Count : {count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
      {todos.map((todo, index) => (
        <li key={index}>{todo.text}</li>
      ))}
      {console.log(todos)}
      <div>
        <h3>Todo App</h3>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={handleTodo}>Add todo</button>
      </div>
    </>
  );
}
const mapStateToProps = (state) => ({
  count: state.value,
  todos: state.todos,
});

const mapDispatchToProps = {
  increment,
  decrement,
  reset,
  todoadd,
  toggleTodo,
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
