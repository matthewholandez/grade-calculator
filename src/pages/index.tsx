import React, { useState } from "react";
import Head from '../components/Head';
import { Form, FormCenter } from '../components/Form';
import Table from '../components/Table'

export default function Home() {

  interface Assignment {
    assignmentName?: string;
    grade: number;
    weight: number;
  }

  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const [weightedAvg, setWeightedAvg] = useState(0);

  const returnWeightedAverage = (a: Assignment[]) => {
    const grades = a.reduce((a, v) => a + (v.grade * v.weight), 0);
    const weights = a.reduce((a, v) => a + v.weight, 0);
    return grades / weights;
  }

  const handleAddAssignment = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const newAssignment: Assignment = {
      assignmentName: formData.get("assignmentName") as string,
      grade: Number(formData.get("grade") as string),
      weight: Number(formData.get("weight") as string),
    };

    setAssignments([...assignments, newAssignment]);
    setWeightedAvg(returnWeightedAverage([...assignments, newAssignment]));

    event.currentTarget.reset();
  };

  return (
    <>
      <Head/>
      <main>
        {assignments.length > 0 ? (
          <div className="flex flex-col md:flex-row mt-5 md:mt-0 px-10 gap-10">
            <Form onSubmit={handleAddAssignment} />
            <Table assignments={assignments} average={Number(weightedAvg.toFixed(2))} />
          </div>
        ) : (
          <div className="flex mt-5 px-10 gap-10">
            <FormCenter onSubmit={handleAddAssignment} />
          </div>
        )}
      </main>
    </>
  );
}
