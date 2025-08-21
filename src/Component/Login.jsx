import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const Navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (u) => u.userName === userName && u.password === password
    );

    if (user) {
      localStorage.setItem("currentUser", JSON.stringify(user));
      Navigate("/dashboard");
    } else {
      alert("Invalid");
    }
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-red-300 flex flex-col space-y-4">
      <form onSubmit={handleLogin}>
        <div className="flex flex-col gap-1">
          <input
            type="text"
            placeholder="Create UserName"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Create Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {/* <NavLink to="/dashboard">
        click
      </NavLink> */}
    </div>
  );
};

export default Login;
