"use client";

import { FormProvider, useForm } from "react-hook-form";

const Form = ({
  children,
  onSubmit,
  id,
}: {
  children: React.ReactNode;
  onSubmit: (values: unknown) => void;
  id?: string;
}) => {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <form id={id} onSubmit={methods.handleSubmit(onSubmit)}>
        {children}
      </form>
    </FormProvider>
  );
};

export default Form;
