import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";
import loginReducer from "../features/Login/loginSlice";

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    todoss: loginReducer,
  },
});
