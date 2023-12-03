"use client";

const SubmitButton = ({
  text,
  forForm,
  onClick,
  isSubmitting = false,
}: {
  text: string;
  forForm?: string;
  onClick?: () => void;
  isSubmitting?: boolean;
}) => {
  return (
    <button
      form={forForm}
      type="submit"
      onClick={onClick}
      disabled={isSubmitting}
      className="mt-10 w-32 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
    >
      {text}
    </button>
  );
};

export default SubmitButton;
