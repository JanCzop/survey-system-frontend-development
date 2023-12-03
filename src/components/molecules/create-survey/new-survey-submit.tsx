"use client";

import { useFormContext } from "react-hook-form";
import SubmitButton from "@/components/atoms/form/submit-button";

const NewSurveySubmit = () => {
  const { formState } = useFormContext();

  return (
    <div className="mb-10 flex justify-end">
      <SubmitButton text="Zapisz" isSubmitting={formState.isSubmitting} />
    </div>
  );
};

export default NewSurveySubmit;
