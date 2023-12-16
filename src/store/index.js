import { combineReducers, createStore } from "redux";
import { counterReducer } from "../reducer/reducer";
import { todoReducer } from "../reducer/reducer";

const rootReducer = combineReducers({
    counter: counterReducer,
    todos: todoReducer
})
const store = createStore(rootReducer);

export default store;
