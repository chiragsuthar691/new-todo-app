import * as Actions from "./types";

/**
 * @desc Set New Todo
 */
export const setNewTodo = (payload) => {
  return {
    type: Actions.SET_NEW_TODO,
    payload,
  };
};

/**
 * @desc Set To Do List 1
 */
export const setToDoList1 = (payload) => {
  return {
    type: Actions.SET_TODO_LIST_1,
    payload,
  };
};

/**
 * @desc Set To Do List 2
 */
export const setToDoList2 = (payload) => {
  return {
    type: Actions.SET_TODO_LIST_2,
    payload,
  };
};

/**
 * @desc Add Todo Item
 */
export const addToDoItem = (payload) => {
  return {
    type: Actions.ADD_TODO_ITEM,
    payload,
  };
};

/**
 * @desc Delete Todo Item 1
 */
export const deleteTodoItem_1 = (payload) => {
  return {
    type: Actions.DELETE_TODO_ITEM_1,
    payload,
  };
};
/**
 * @desc Delete Todo Item 2
 */
export const deleteTodoItem_2 = (payload) => {
  return {
    type: Actions.DELETE_TODO_ITEM_2,
    payload,
  };
};

/**
 * @desc Handle Swap Data
 */
export const swapData = (payload) => {
  return {
    type: Actions.SWAP_DATA,
    payload,
  };
};
