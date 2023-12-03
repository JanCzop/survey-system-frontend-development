"use client";

import { CheckCircleIcon } from "@heroicons/react/24/outline";

const SaveButton = ({ onClick }: { onClick: () => void }) => (
  <button type="button" onClick={onClick}>
    <CheckCircleIcon className="h-6 w-6 text-green-500" />
  </button>
);

export default SaveButton;
