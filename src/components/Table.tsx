import React from "react";

interface Assignment {
    assignmentName?: string;
    grade: number;
    weight: number;
}

interface AssignmentTableProps {
    assignments: Assignment[];
    average: number;
}

export default function Table({ assignments, average }: AssignmentTableProps) {
    return (
        <div className="flex flex-col flex-grow md:min-h-screen md:w-60 lg:w-70 items-center justify-center gap-5">
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
            <div>
                <p>Your weighted average is <span className="font-bold">{average}%.</span></p>
            </div>
        </div>
    );
}
