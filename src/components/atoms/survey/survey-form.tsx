"use client";

import { useRouter } from "next/navigation";
import Form from "../form/form";

const SurveyForm = ({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) => {
  const router = useRouter();
  const submitHandler = (data: unknown) => {
    const payload = {
      id: parseInt(id),
      answers: data,
    };

    fetch(`/survey/${id}/api`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then(() => router.push(`/dziekujemy`))
      .catch((err) => {
        console.error(err);
      });
  };

  return <Form onSubmit={submitHandler}>{children}</Form>;
};

export default SurveyForm;
