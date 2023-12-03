"use client";

import { PencilSquareIcon } from "@heroicons/react/24/outline";

const EditButton = ({ onClick }: { onClick: () => void }) => (
  <button type="button" onClick={onClick}>
    <PencilSquareIcon className="h-6 w-6 text-blue-500" />
  </button>
);

export default EditButton;
