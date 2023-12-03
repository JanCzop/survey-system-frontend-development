"use client";

import { useContext } from "react";
import { UserContext } from "@/components/_auth/user-context";

const UserHeader = () => {
  const { username } = useContext(UserContext);
  return (
    <div className="m-5 flex h-20 w-full justify-between rounded-lg bg-white p-4">
      <div className="ml-4 flex items-center">
        <span className="text-lg font-semibold text-gray-800">
          Witaj, {username}!
          <br />
          Oto twoje ankiety:
        </span>
      </div>
    </div>
  );
};

export default UserHeader;
