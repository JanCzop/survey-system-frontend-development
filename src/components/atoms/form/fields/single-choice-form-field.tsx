"use client";

import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { useFormContext } from "react-hook-form";

interface SingleInputFormFieldProps extends FormField {
  choices: {
    order: string;
    text: string;
  }[];
}

const SingleChoiceFormField = ({
  name,
  disabled = false,
  choices,
}: SingleInputFormFieldProps) => {
  const { register } = useFormContext();

  return (
    <RadioGroup>
      {choices.map(({ order, text }, idx: number) => (
        <div key={idx}>
          {!disabled ? (
            <FormControlLabel
              key={order}
              value={order}
              control={<Radio {...register(name)} />}
              label={text}
            />
          ) : (
            <FormControlLabel
              key={order}
              value={order}
              control={<Radio />}
              disabled
              label={text}
            />
          )}
        </div>
      ))}
    </RadioGroup>
  );
};

export default SingleChoiceFormField;
