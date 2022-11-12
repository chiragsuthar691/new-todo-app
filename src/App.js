import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToDoItem,
  deleteTodoItem_1,
  deleteTodoItem_2,
  setNewTodo,
  setToDoList1,
  setToDoList2,
  swapData,
} from "./actions/toDoActions";

const MyTodoApp = () => {
  const toDoSelector = useSelector((state) => state.toDo);
  const { toDoList1, toDoList2, newToDo } = toDoSelector;
  console.log("toDoSelector", toDoSelector);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setNewTodo(e.target.value));
  };

  const handleAddItem = () => {
    if (newToDo) {
      dispatch(addToDoItem(newToDo));
      dispatch(setNewTodo(""));
    }
    // const { newItem, toDoList1 } = state;
    // if (!newItem) return;
    // const toDo = {
    //   id: Math.random,
    //   todo: newItem,
    // };
    // list.push(toDo);
    // setState({
    //   list1: list,
    //   newItem: "",
    // });
  };

  const handleDelete = (e, id) => {
    dispatch(deleteTodoItem_1(id));
    //   const { toDoList1 } = state;
    //   const updatedList1 = const toDoList1.filter((item) => {
    //     return item.id !== id;
    //   });
    //   setState({
    //     toDoList1: updatedList1,
    //   });
    // };
  };

  const handleDelete2 = (e, id) => {
    dispatch(deleteTodoItem_2(id));
  };

  const handleAddToList2 = () => {
    dispatch(setToDoList2());
  };

  const handleAddToList1 = () => {
    dispatch(setToDoList1());
  };

  const handleSwapData = (condition) => {
    dispatch(swapData(condition));
    console.log("condition", condition);
  };

  return (
    <div>
      <div>
        <h1>My Todo App(Functional)</h1>
        <input
          type="text"
          placeholder="Enter your text here"
          value={newToDo}
          onChange={handleChange}
        />
        <button onClick={handleAddItem}>Add</button>
      </div>
      <div>
        <button onClick={handleAddToList2}>{">"}</button>
        <button onClick={handleAddToList1}>{"<"}</button>
        <button
          onClick={() => {
            handleSwapData(2);
          }}
        >
          {">>"}
        </button>
        <button
          onClick={() => {
            handleSwapData(1);
          }}
        >
          {"<<"}
        </button>
      </div>
      <div>
        <h1>List 1</h1>
        <ul>
          {toDoList1 &&
            toDoList1.length > 0 &&
            toDoList1.map((item) => {
              return (
                <li>
                  {item?.todo}
                  <span onClick={(e) => handleDelete(e, item.id)}>Delete</span>
                </li>
              );
            })}
        </ul>
      </div>
      <div>
        <h1>List 2</h1>
        <ul>
          {toDoList2 &&
            toDoList2.length > 0 &&
            toDoList2.map((item) => {
              return (
                <li>
                  {item?.todo}
                  <span onClick={(e) => handleDelete2(e, item.id)}>Delete</span>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

// const mapStateToProps = (state) => ({
//   toDo: state.toDo,
// });

// export default connect(mapStateToProps, {
//   setNewTodo,
//   addToDoItem,
//   deleteTodoItem_1,
//   setToDotoDoList1,
// })(MyTodoApp);
export default MyTodoApp;
