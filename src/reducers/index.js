import { combineReducers } from "redux";
import { toDoReducer } from "./toDoReducer";

const appReducer = combineReducers({
  toDo: toDoReducer,
});

export default appReducer;
