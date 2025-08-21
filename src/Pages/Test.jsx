import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { registter } from "../features/Login/loginSlice";

const Test = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleaddTest = (e) => {
    e.preventDefault();
    dispatch(registter({ userName, password }));
    setUserName("");
  };
  return (
    <div>
      <form onSubmit={handleaddTest}>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className="bg-black text-white"
        />
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">click</button>
      </form>
    </div>
  );
};

export default Test;
