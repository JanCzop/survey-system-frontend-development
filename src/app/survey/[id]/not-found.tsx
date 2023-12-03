"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const [newId, setNewId] = useState("");
  const router = useRouter();

  const handleIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewId(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push(`/survey/${newId}`);
  };

  return (
    <div className="flex h-full flex-col items-center justify-center bg-white">
      <h1 className="mb-4 text-4xl font-bold">Survey Not Found</h1>
      <p className="mb-4 text-lg">
        The survey with the provided ID does not exist.
      </p>
      <form onSubmit={handleSubmit} className="flex items-center">
        <input
          type="text"
          id="newId"
          value={newId}
          onChange={handleIdChange}
          className="mr-2 h-full rounded-md border border-gray-300 px-2 py-1"
          placeholder="Enter a new ID:"
        />
        <button
          type="submit"
          className="rounded-md bg-blue-500 px-4 py-2 text-white"
        >
          Go to Survey
        </button>
      </form>
    </div>
  );
};

export default NotFound;
