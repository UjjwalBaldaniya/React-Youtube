import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

import { collapsedWidth } from "../../constants";
import Header from "../layout/Header";

const Layout: React.FC = () => {
  return (
    <>
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
        <Box sx={{ marginTop: "64px" }}>
          <Outlet />
        </Box>
      </Box>
    </>
  );
};

export default Layout;
