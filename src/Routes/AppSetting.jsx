import React from "react";
import ThemeButton from "../Buttons/ThemeButton";
import { SettingsIcon } from "lucide-react";

const AppSetting = () => {
  return (
    <div className="py-2 space-y-4">
      <div className="">
        <h1 className="flex items-center justify-start gap-2">
          <SettingsIcon className="h-5 w-5" /> Coustom Settings
        </h1>
      </div>
      <div className="border dark:border-gray-500 p-3 rounded-md shadow space-y-4">
        <div className="flex justify-between items-center">
          <h1>Dark Mode</h1>
          <ThemeButton />
        </div>

        {/* <div className="flex justify-between items-center">
        <h1>Dark Mode</h1>
        <ThemeButton />
        </div> */}
      </div>
    </div>
  );
};

export default AppSetting;
