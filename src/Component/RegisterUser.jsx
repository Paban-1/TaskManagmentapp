import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registter } from "../features/Login/loginSlice";
import { NavLink, useNavigate } from "react-router-dom";
import RegisterPopup from "./RegisterPopup";
import { vector1, vector2, caracter } from "../constent";

const RegisterUser = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [popup, setPopup] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRgisterUser = (e) => {
    e.preventDefault();
    dispatch(registter({ userName, password }));
    setUserName("");
    setPassword("");
    setPopup(true);
    const timer = setTimeout(() => {
      navigate("/login");
    }, 2000);
  };

  return (
    <div className=" h-screen w-full flex justify-center items-center fixed inset-0 overflow-hidden ">
      <div className="rounded-tr-3xl rounded-br-3xl h-full w-1/2 flex justify-center items-center bg-blue-900 select-none">
        <img src={caracter} alt="" className="object-cover" />
      </div>

      <div className="h-full w-1/2 flex flex-col justify-center items-center select-none">
        <h1 className="text-8xl font-nextfo">Lima</h1>
        <p className="text-[16px]">Start your Grate life, with us 🎉</p>

        <form
          onSubmit={handleRgisterUser}
          className="flex gap-2 flex-col p-8 rounded "
        >
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value.trim())}
            required
            className="px-4 rounded py-2 shadow outline-none w-80 text-xl"
            placeholder="Create you'r username"
          />
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value.trim())}
            required
            className="px-4 rounded py-2 shadow w-80 outline-none text-xl"
            placeholder="Create you'r password"
          />
          <div className="mt-5 w-full">
            <button
              type="submit"
              className="border rounded p-2 w-full hover:bg-blue-700 hover:text-white duration-200 text-xl"
            >
              Register
            </button>
          </div>
          <NavLink to="/login" className={`hover:text-blue-800 text-md`}>
            Have an account ?
          </NavLink>
        </form>
      </div>

      <div className="fixed right-3 top-4 p-4">
        {popup && <RegisterPopup />}
      </div>
    </div>
  );
};

export default RegisterUser;
