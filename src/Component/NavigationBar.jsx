import React from "react";
import { Settings, PenIcon, User } from "lucide-react";
import { NavLink } from "react-router-dom";

const NavigationBar = () => {
  return (
    <div className=" py-2 flex flex-col justify-start gap-4 dark:bg-black text-black dark:text-white dark:border-r border-r border-gray-400">
      <div className="px-12 text-black">
        <h1 className="text-2xl">Logo</h1>
      </div>

      <div className="flex flex-col gap-2 px-2">
        <NavLink
          to="profile/"
          className={({ isActive }) =>
            ` ${
              isActive
                ? "bg-black dark:bg-gray-800 text-white shadow"
                : "text-gray-500"
            } px-2 rounded-md hover:text-white hover:dark:bg-gray-800  hover:bg-black duration-200 flex gap-1 justify-start items-center `
          }
        >
          <User className="h-5 w-5" />
          Profile
        </NavLink>

        <NavLink
          to="todos/"
          className={({ isActive }) =>
            ` ${
              isActive
                ? "bg-black dark:bg-gray-800 text-white shadow"
                : "text-gray-500"
            } px-2 rounded-md hover:text-white hover:dark:bg-gray-800  hover:bg-black duration-200 flex gap-1 justify-start items-center`
          }
        >
          <PenIcon className="h-5 w-5" />
          Todos
        </NavLink>

        <NavLink
          to="/"
          className={({ isActive }) =>
            ` ${
              isActive
                ? "bg-black dark:bg-gray-800 text-white shadow"
                : "text-gray-500"
            } px-2 rounded-md hover:text-white hover:dark:bg-gray-800  hover:bg-black duration-200`
          }
        >
          Deals
        </NavLink>
      </div>

      <div className=" flex flex-col gap-2 px-2">
        <NavLink
          to="/"
          className={({ isActive }) =>
            ` ${
              isActive
                ? "bg-black dark:bg-gray-800 text-white shadow"
                : "text-gray-500"
            } rounded-md px-2 flex justify-start items-center gap-1 hover:text-white hover:dark:bg-gray-800  hover:bg-black duration-200`
          }
        >
          Todos
        </NavLink>

        <NavLink
          to="/"
          className={({ isActive }) =>
            ` ${
              isActive
                ? "bg-black dark:bg-gray-800 text-white shadow"
                : "text-gray-500"
            } px-2 rounded-md hover:text-white hover:dark:bg-gray-800 hover:bg-black duration-200`
          }
        >
          New Task
        </NavLink>

        <NavLink
          to="/"
          className={({ isActive }) =>
            ` ${
              isActive
                ? "bg-black dark:bg-gray-800 text-white shadow"
                : "text-gray-500"
            } px-2 rounded-md hover:text-white hover:bg-black hover:dark:bg-gray-800 duration-200`
          }
        >
          Old Task
        </NavLink>
      </div>

      <div className=" flex flex-col gap-2 px-2">
        <NavLink
          to="/"
          className={({ isActive }) =>
            ` ${
              isActive
                ? "bg-black dark:bg-gray-800 text-white shadow"
                : "text-gray-500"
            } px-2 rounded-md hover:text-white hover:dark:bg-gray-800  hover:bg-black duration-200`
          }
        >
          Todos
        </NavLink>

        <NavLink
          to="/"
          className={({ isActive }) =>
            ` ${
              isActive
                ? "bg-black dark:bg-gray-800 text-white shadow"
                : "text-gray-500"
            } px-2 rounded-md hover:text-white hover:dark:bg-gray-800  hover:bg-black duration-200`
          }
        >
          Tasks
        </NavLink>

        <NavLink
          to="/"
          className={({ isActive }) =>
            ` ${
              isActive
                ? "bg-black dark:bg-gray-800 text-white shadow"
                : "text-gray-500"
            } px-2 rounded-md hover:text-white hover:dark:bg-gray-800  hover:bg-black duration-200`
          }
        >
          Deals
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) =>
            ` ${
              isActive
                ? "bg-black dark:bg-gray-800 text-white shadow"
                : "text-gray-500"
            } px-2 rounded-md hover:text-white hover:dark:bg-gray-800  hover:bg-black duration-200`
          }
        >
          new
        </NavLink>
      </div>

      <div className="  flex flex-col gap-2 px-2">
        <NavLink
          to="/"
          className={({ isActive }) =>
            ` ${
              isActive
                ? "bg-black dark:bg-gray-800 text-white shadow"
                : "text-gray-500"
            } px-2 rounded-md hover:text-white hover:dark:bg-gray-800  hover:bg-black duration-200`
          }
        >
          Deals
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) =>
            ` ${
              isActive
                ? "bg-black dark:bg-gray-800 text-white shadow"
                : "text-gray-500"
            } px-2 rounded-md hover:text-white hover:dark:bg-gray-800  hover:bg-black duration-200`
          }
        >
          Deals
        </NavLink>

        <NavLink
          to="setting/"
          className={({ isActive }) =>
            ` ${
              isActive
                ? "bg-black text-white dark:bg-gray-800"
                : "text-gray-500"
            } rounded-md px-2 flex justify-start items-center gap-1 hover:text-white hover:dark:bg-gray-800  hover:bg-black duration-200`
          }
        >
          <Settings className="h-5 w-5" />
          Settings
        </NavLink>
      </div>
    </div>
  );
};

export default NavigationBar;
