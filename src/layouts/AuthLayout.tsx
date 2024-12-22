import { Box, CssBaseline } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "../components/layout/Sidebar";
import { collapsedWidth } from "../constants";

const AuthLayout: React.FC = () => {
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Sidebar />
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: collapsedWidth,
            right: 0,
            bottom: 0,
            padding: 3,
            zIndex: 1,
            transition: "left 0.3s",
            overflow: "auto",
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </div>
  );
};

export default AuthLayout;
