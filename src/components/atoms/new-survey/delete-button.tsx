"use client";

import { TrashIcon } from "@heroicons/react/24/outline";

const DeleteButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button tabIndex={-1} type="button" onClick={onClick}>
      <TrashIcon className="h-6 w-6 text-red-600" />
    </button>
  );
};

export default DeleteButton;
