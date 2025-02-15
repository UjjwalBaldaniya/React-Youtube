import { Box, CssBaseline } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../components/layout/Header";

const AuthLayout: React.FC = () => {
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            padding: 3,
            zIndex: 1,
            transition: "left 0.3s",
            overflow: "auto",
          }}
        >
          <Header fullWidth={true} />
          <Outlet />
        </Box>
      </Box>
    </div>
  );
};

export default AuthLayout;
