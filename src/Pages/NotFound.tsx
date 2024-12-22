import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  const handleGoHome = (): void => {
    navigate("/dashboard");
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <Box sx={{ textAlign: "center" }}>
        <Typography
          variant="h1"
          sx={{ fontSize: "6rem", fontWeight: "bold", color: "primary.main" }}
        >
          404
        </Typography>
        <Typography variant="h6" sx={{ marginBottom: 2 }}>
          Oops! The page you are looking for does not exist.
        </Typography>
        <Button variant="contained" color="primary" onClick={handleGoHome}>
          Go to Home
        </Button>
      </Box>
    </Container>
  );
};

export default NotFound;
