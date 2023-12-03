"use client";

import React from "react";
import AdapterDateFns from '@mui/lab/AdapterDateFns'; 
import { DatePicker, LocalizationProvider } from "@mui/lab";
import { TextField, TextFieldProps } from "@mui/material";
import { useFormContext, Controller } from "react-hook-form";

interface DateFormFieldProps extends FormField {
  label: string;
  name: string;
}

const DateFormField = ({ name, label }: DateFormFieldProps) => {
  const { control } = useFormContext();

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Controller
        control={control}
        name={name}
        defaultValue={null}
        render={({ field }) => (
          <DatePicker
            {...field}
            label={label}
            renderInput={(params: TextFieldProps) => (
              <TextField
                {...params}
                variant="standard"
                fullWidth
                inputProps={{ style: { textAlign: "center" } }}
              />
            )}
            inputFormat="dd.MM.yyyy"
          />
        )}
      />
    </LocalizationProvider>
  );
};

export default DateFormField;
