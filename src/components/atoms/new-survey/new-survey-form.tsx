"use client";

import { useContext } from "react";
import { useRouter } from "next/navigation";
import Form from "../form/form";
import { UserContext } from "@/components/_auth/user-context";

const NewSurveyForm = ({ children }: { children: React.ReactNode }) => {
  const { token } = useContext(UserContext);
  const router = useRouter();

  const submitHandler = (data: unknown) => {
    console.log(data);
    fetch("/surveys/api", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then(() => router.push(`/user-panel`))
      .catch((err) => console.log(err));
  };

  return (
    <Form id="new-survey-form" onSubmit={submitHandler}>
      {children}
    </Form>
  );
};

export default NewSurveyForm;
