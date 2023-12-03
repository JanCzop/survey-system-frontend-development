import React from "react";
import NavTab from "@/components/atoms/user-bar/nav-tab";

const TitleBar = ({ title }: { title: string }) => {
  return (
    <div className="flex h-full items-center justify-between bg-sky-700 p-6">
      <div className="flex flex-shrink-0 items-center text-white">
        <span className="text-3xl font-semibold tracking-tight">{title}</span>
      </div>
      <div className="flex flex-shrink-0 items-center text-white">
        <NavTab />
      </div>
    </div>
  );
};

export default TitleBar;
