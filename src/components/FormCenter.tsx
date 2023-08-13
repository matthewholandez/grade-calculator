import React from "react";

interface AssignmentFormProps {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export default function FormCenter({ onSubmit }: AssignmentFormProps) {
  return (
    <div className="flex flex-grow min-h-screen flex-col items-center justify-center bg-white gap-10">
      <section id="header">
        <div className="container flex flex-col items-center justify-center gap-1 text-black font-thew">
          <h1 className="text-4xl font-light">Grade Calculator</h1>
        </div>
      </section>
      <section id="calculator" className="w-full max-w-xs sm:max-w-sm md:max-w-md">
        <form className="flex flex-col gap-1" onSubmit={onSubmit}>
          <div className="flex flex-col">
            <label className="text-lg">
              Assignment name <span className="italic">(optional)</span>
            </label>
            <input className="px-1 py-1 border rounded-md" name="assignmentName" />
          </div>
          <div className="grid grid-cols-2 gap-4 mb-5">
            <div className="flex flex-col">
              <label className="text-lg">
                Grade %
              </label>
              <input className="py-1 px-1 border rounded-md" type="number" max="100" name="grade" />
            </div>
            <div className="flex flex-col ">
              <label className="text-lg">
                Weight
              </label>
              <input className="py-1 px-1 border rounded-md" type="number" name="weight" />
            </div>
          </div>
          <button
            type="submit"
            className="text-lg font-semibold bg-gradient-to-r from-teal-500 to-blue-600 w-1/2 mx-auto rounded-lg text-white py-1"
          >
            Add Assignment
          </button>
        </form>
      </section>
    </div>
  );
}
