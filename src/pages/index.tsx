import Head from "next/head";
import React, { useState } from "react";

export default function Home() {

  interface Assignment {
    assignmentName: string;
    grade: number;
    weight: number;
  }

  const [assignments, setAssignments] = useState<Assignment[]>([]);

  const handleAddAssignment = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const newAssignment: Assignment = {
      assignmentName: formData.get("assignmentName") as string,
      grade: Number(formData.get("grade") as string),
      weight: Number(formData.get("weight") as string),
    };

    setAssignments([...assignments, newAssignment]);

    event.currentTarget.reset();
  };

  return (
    <>
      <Head>
        <title>Grade Calculator</title>
        <meta name="description" content="Calculate your weighted average and what grades are needed to achieve a different overall mark." />
        <meta name="robots" content="noindex" /> {/* TODO: REMOVE THIS WHEN DONE */}
        <link rel="icon" href="/favicon.ico" /> 
      </Head>
      <main>
        <div className="flex flex-col md:flex-row mt-5 md:mt-0 px-10 gap-10">
          <div className="flex flex-grow md:min-h-screen md:w-40 lg:w-30 flex-col items-center justify-center bg-white gap-10">
            <section id="header">
              <div className="container flex flex-col items-center justify-center gap-1 text-black font-thew">
                <h1 className="text-4xl font-light">Grade Calculator</h1>
              </div>
            </section>
            <section id="calculator" className="w-full max-w-xs sm:max-w-sm md:max-w-md">
              <form className="flex flex-col gap-1" onSubmit={handleAddAssignment}>
                <div className="flex flex-col">
                  <label className="text-lg">
                    Assignment name <span className="italic">(optional)</span>
                  </label>
                  <input className="px-1 py-1 border rounded-md" name="assignmentName"/>
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
                    <input className="py-1 px-1 border rounded-md" type="number" name="weight"/>
                  </div>
                </div>
                <button type="submit"
                  className="text-lg font-semibold bg-gradient-to-r from-teal-500 to-blue-600 w-1/2 mx-auto rounded-lg text-white py-1"
                >
                  Add Assignment
                </button>
              </form>
            </section>
          </div>
          <div className="flex flex-grow md:min-h-screen md:w-60 lg:w-70 items-center justify-center">
            <section id="results" className="w-full max-w-lg">
              <div className="max-h-[calc(100vh-6rem)] overflow-auto">
                <table className="border w-full table-auto">
                  <thead className="bg-slate-900 text-white">
                    <tr>
                      <th className="py-4 border-b">Assignment</th>
                      <th className="py-4 border-b">Grade</th>
                      <th className="py-4 border-b">Weight</th>
                    </tr>
                  </thead>
                  <tbody>
                    {assignments.map((assignment, index) => (
                      <tr key={index}>
                        <td className="py-2 px-1 border-b border-r">{assignment.assignmentName}</td>
                        <td className="py-2 px-1 border-b border-r text-center">{assignment.grade}%</td>
                        <td className="py-2 px-1 border-b text-center">{assignment.weight}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
          </section>
          </div>
        </div>
      </main>
    </>
  );
}
