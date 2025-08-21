import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";
import { RiStarFill } from "@remixicon/react";
import { ListTodoIcon, Trash2Icon } from "lucide-react";

const ShowTodos = () => {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();
  return (
    <div className="shadow border dark:border-gray-500 rounded p-4">
      <div className="flex items-center gap-2 font-bold text-blue-600 mb-5">
        <RiStarFill className="text-blue-500 dark:text-white" />
        <h1>Your Tasks</h1>
      </div>

      <div className="p-1 cursor-pointer space-y-2">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className="flex items-center justify-between px-2 py-4 border rounded"
          >
            <p className="flex items-center gap-2 text-xl">
              <ListTodoIcon />
              {todo.text}
            </p>
            <button onClick={() => dispatch(removeTodo(todo.id))}>
              <Trash2Icon />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowTodos;
