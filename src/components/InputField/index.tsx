import { TextField } from "@mui/material";
import { UseFormRegister } from "react-hook-form";

import { inputStyles, labelStyles } from "../../pages/auth/input.styles";

interface InputFieldProps {
  label: string;
  type?: string;
  fullWidth: boolean;
  margin: "dense" | "normal" | "none";
  name: string;
  register: UseFormRegister<any>;
  error: boolean;
  helperText?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  type = "text",
  fullWidth,
  margin,
  name,
  register,
  error,
  helperText,
}) => {
  return (
    <TextField
      label={label}
      fullWidth={fullWidth}
      margin={margin}
      type={type}
      {...register(name, { required: `${label} is required` })}
      error={error}
      helperText={helperText}
      InputLabelProps={{
        sx: labelStyles,
      }}
      sx={inputStyles(error)}
    />
  );
};

export default InputField;
