import Button from "@mui/material/Button";
import React from "react";

interface CustomButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "contained" | "outlined" | "text";
  fullWidth?: boolean;
  disabled?: boolean;
  sx?: object;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  onClick,
  type = "button",
  variant = "contained",
  fullWidth = false,
  disabled = false,
  sx = {},
}) => {
  return (
    <Button
      onClick={onClick}
      type={type}
      variant={variant}
      fullWidth={fullWidth}
      disabled={disabled}
      sx={sx}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
