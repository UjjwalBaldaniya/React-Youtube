import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light", // or "dark"
    primary: {
      main: "#1976d2",
      light: "#63a4ff",
      dark: "#004ba0",
      contrastText: "#fff",
    },
    secondary: {
      main: "#ff4081",
      light: "#ff79b0",
      dark: "#c60055",
      contrastText: "#000",
    },
    error: {
      main: "#f44336",
    },
    warning: {
      main: "#ff9800",
    },
    info: {
      main: "#2196f3",
    },
    success: {
      main: "#4caf50",
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
  },
});

export default theme;
