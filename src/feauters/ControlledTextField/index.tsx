import { Controller, FieldValues, Path, useFormContext } from "react-hook-form";

import { TextField, TextFieldProps } from "@mui/material";

interface ControlledTextFieldProps<T extends FieldValues>
  extends Omit<TextFieldProps, "name" | "value" | "onChange" | "onBlur"> {
  fieldName: Path<T>;
  children?: React.ReactNode;
}

const ControlledTextField = <T extends FieldValues>({
  fieldName,
  children,
  ...textFieldProps
}: ControlledTextFieldProps<T>) => {
  const { control } = useFormContext<T>();

  return (
    <Controller
      name={fieldName}
      control={control}
      render={({ field, fieldState }) => {
        return (
          <TextField
            {...field}
            {...textFieldProps}
            InputLabelProps={{ shrink: true }}
            error={!!fieldState.error}
            helperText={fieldState.error?.message}
            autoComplete="off"
            color="primary"
          >
            {children}
          </TextField>
        );
      }}
    />
  );
};

export default ControlledTextField;
