import React from "react";
import NavigationBar from "../Component/NavigationBar";
import ComponentOne from "../Routes/ComponentOne";
import ContentBox from "./ContentBox";

const MainDashboard = () => {
  
  return (
    <section className="h-screen w-screen fixed inset-0 flex justify-center dark:bg-black text-black dark:text-white">
      <NavigationBar />
      <ContentBox />
      {/* <ComponentOne /> */}
      {/* <div className="border"></div> */}
    </section>
  );
};

export default MainDashboard;
