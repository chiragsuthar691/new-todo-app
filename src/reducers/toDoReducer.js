import * as Actions from "../actions/types";

const initialState = {
  newToDo: "",
  toDoList1: [],
  toDoList2: [],
};

// let id = 0;

export const toDoReducer = (
  state = JSON.parse(JSON.stringify(initialState)),
  action
) => {
  switch (action.type) {
    case Actions.SET_NEW_TODO:
      return {
        ...state,
        newToDo: action.payload,
      };
    case Actions.SET_TODO_LIST_1:
      const setList1 = [...state.toDoList1];
      const setList2 = [...state.toDoList2];
      if (setList2?.length > 0) {
        setList1.push(setList2[0]);
        setList2.shift();
      }
      console.log("setList2", setList2);
      return {
        ...state,
        toDoList1: setList1,
        toDoList2: setList2,
      };
    case Actions.SET_TODO_LIST_2:
      const setList3 = [...state.toDoList1];
      const setList4 = [...state.toDoList2];
      if (setList3?.length > 0) {
        setList4.push(setList3[0]);
        setList3.shift();
      }
      return {
        ...state,
        toDoList2: setList4,
        toDoList1: setList3,
      };
    case Actions.ADD_TODO_ITEM:
      const list = [...state.toDoList1];
      const toDo = {
        id: Math.random(),
        todo: action.payload,
      };
      list.push(toDo);
      return {
        ...state,
        toDoList1: list,
      };
    case Actions.DELETE_TODO_ITEM_1:
      const list1 = [...state.toDoList1];
      const updatedList1 = list1.filter((item) => {
        return item.id !== action.payload;
      });
      return {
        ...state,
        toDoList1: updatedList1,
      };
    case Actions.DELETE_TODO_ITEM_2:
      const list5 = [...state.toDoList2];
      const updatedList2 = list5.filter((item) => {
        return item.id !== action.payload;
      });
      return {
        ...state,
        toDoList2: updatedList2,
      };
    case Actions.CLEAR_TODO_DATA:
      const initialTempState = JSON.parse(JSON.stringify(initialState));
      return initialTempState;
    case Actions.SWAP_DATA:
      const allList = [...state.toDoList1, ...state.toDoList2];
      console.log("action.payload", action.payload);
      return {
        ...state,
        toDoList2: action.payload === 2 ? allList : [],
        toDoList1: action.payload === 1 ? allList : [],
      };
    default:
      return state;
  }
};
