import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FF0000", // YouTube red
    },
    background: {
      default: "#0f0f0f", // YouTube dark background
      paper: "#2f2f2f", // Slightly lighter for cards
    },
    text: {
      primary: "#FFFFFF", // Main text color
      secondary: "#AAAAAA", // Subtle text
    },
    error: {
      main: "#FF0000",
    },
  },
  typography: {
    fontFamily: `'Roboto', 'Arial', sans-serif`, // Matches YouTube's font
    h1: {
      fontSize: "2.5rem",
      fontWeight: 600,
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 500,
    },
    body1: {
      fontSize: "1rem",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#0f0f0f", // Ensures the background color is applied globally
          margin: 0,
          padding: 0,
          boxSizing: "border-box",
        },
      },
    },
  },
});

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#FF0000",
    },
    background: {
      default: "#FFFFFF",
      paper: "#F9F9F9",
    },
    text: {
      primary: "#000000",
      secondary: "#555555",
    },
  },
});

export default theme;
