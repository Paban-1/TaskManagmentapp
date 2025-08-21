import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  users: JSON.parse(localStorage.getItem("users")) || [],
};
export const loginSplice = createSlice({
  name: "login",
  initialState: { users: initialState.users },
  reducers: {
    registter: (state, action) => {
      const login = {
        id: nanoid(),
        userName: action.payload.userName,
        password: action.payload.password,
      };
      state.users.push(login);
      localStorage.setItem("users", JSON.stringify(state.users))
    },
  },
});

export const { registter } = loginSplice.actions;
export default loginSplice.reducer;
