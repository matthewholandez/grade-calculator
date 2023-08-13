import React, { useState } from "react";
import Head from '../components/Head';
import Form from '../components/Form';
import FormCenter from '../components/FormCenter';
import Table from '../components/Table'

export default function Home() {

  interface Assignment {
    assignmentName?: string;
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
      <Head/>
      <main>
        {assignments.length > 0 ? (
          <div className="flex flex-col md:flex-row mt-5 md:mt-0 px-10 gap-10">
            <Form onSubmit={handleAddAssignment} />
            <Table assignments={assignments} />
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
