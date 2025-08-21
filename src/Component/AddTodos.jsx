import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
import { PlusCircle, PlusSquareIcon } from "lucide-react";

const AddTodos = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;
    dispatch(addTodo(input));
    setInput("");
  };
  console.log(input);

  return (
    <div className="w-full border dark:border-gray-600 shadow flex font-bold p-4 rounded select-none">
      <form
        onSubmit={addTodoHandler}
        className="w-full flex justify-between px-4"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add Your Tasks here.."
          className="border bg-gray-200 rounded outline-none p-2"
        />
        <button type="submit" className="flex items-center gap-3">
          Add
          <PlusCircle className="h-7 w-7" />
        </button>
      </form>
    </div>
  );
};

export default AddTodos;
