import { Box } from "@mui/material";
import React from "react";

import { collapsedWidth } from "../../constants";
import Header from "./Header";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps): JSX.Element => {
  return (
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
      <Header />
      <Box sx={{ marginTop: "64px" }}>{children}</Box>
    </Box>
  );
};

export default MainLayout;
