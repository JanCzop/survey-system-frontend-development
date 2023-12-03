"use client";

import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { useFormContext } from "react-hook-form";

interface MultiChoiceFormFieldProps extends FormField {
  choices: {
    order: string;
    text: string;
  }[];
  disabled?: boolean;
}

const MultiChoiceFormField = ({
  name,
  choices,
  disabled = false,
}: MultiChoiceFormFieldProps) => {
  const { register } = useFormContext();

  return (
    <FormGroup>
      {choices.map(({ order, text }) =>
        !disabled ? (
          <FormControlLabel
            key={order}
            value={order}
            control={<Checkbox {...register(name)} />}
            label={text}
          />
        ) : (
          <FormControlLabel
            key={order}
            value={order}
            control={<Checkbox />}
            disabled
            label={text}
          />
        ),
      )}
    </FormGroup>
  );
};

export default MultiChoiceFormField;
