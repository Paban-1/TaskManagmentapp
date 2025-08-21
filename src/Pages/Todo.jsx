import React from "react";
import AddTodos from "../Component/AddTodos";
import ShowTodos from "../Component/ShowTodos";
import { Provider } from "react-redux";
import { store } from "../app/store";

const Todo = () => {
  return (
    <div className="w-full h-full select-none p-1 space-y-2 relative">
      {/* <Provider store={store}> */}
        <AddTodos />
        <ShowTodos />
      {/* </Provider> */}
    </div>
  );
};

export default Todo;
