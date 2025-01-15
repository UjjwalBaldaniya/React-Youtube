import { CSSObject } from "@mui/system";

export const inputStyles = (error?: boolean): CSSObject => ({
  backgroundColor: "background.default",
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: error ? "error.main" : "background.paper", // Error color when error exists
    },
    "&:hover fieldset": {
      borderColor: error ? "error.main" : "background.paper", // Keep error color on hover
    },
    "&.Mui-focused fieldset": {
      borderColor: error ? "error.main" : "background.paper", // Keep error color when focused
    },
  },
});

export const labelStyles = {
  color: "text.secondary", // Default label color
  "&.Mui-focused": {
    color: "text.secondary", // Focused label color
  },
  "&.Mui-error": {
    color: "error.main", // Error label color
  },
};
