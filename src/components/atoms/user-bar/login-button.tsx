"use client";
import { PowerIcon } from "@heroicons/react/24/outline";

const LoginButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button type="button" onClick={onClick} className="flex items-center justify-center">
      <PowerIcon className="h-6 w-6 text-white-600" />
      <label className="text-white-600">Zaloguj</label>

    </button>
  );
};

export default LoginButton;
