"use client";
import { DocumentDuplicateIcon } from "@heroicons/react/24/outline";

const MySurveysButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button type="button" onClick={onClick} className="flex items-center justify-center">
      <DocumentDuplicateIcon className="h-6 w-6 text-white-600" />
      <label className="text-white-600">Moje ankiety</label>
    </button>
  );
};

export default MySurveysButton;
