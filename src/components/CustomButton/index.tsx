import Button from "@mui/material/Button";
import React from "react";

interface CustomButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "contained" | "outlined" | "text";
  fullWidth?: boolean;
  disabled?: boolean;
  startIcon?: JSX.Element;
  sx?: object;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  onClick,
  type = "button",
  variant = "contained",
  fullWidth = false,
  disabled = false,
  startIcon,
  sx = {},
}) => {
  return (
    <Button
      onClick={onClick}
      type={type}
      variant={variant}
      fullWidth={fullWidth}
      disabled={disabled}
      startIcon={startIcon}
      sx={sx}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
