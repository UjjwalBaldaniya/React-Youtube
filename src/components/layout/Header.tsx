import { AppBar, Toolbar, Typography } from "@mui/material";

import { collapsedWidth } from "../../constants";

const Header: React.FC = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: `calc(100% - ${collapsedWidth}px)`, // Adjust width based on drawer state
        ml: `${collapsedWidth}px`, // Margin left to align with drawer
        backgroundColor: "primary.main",
        boxShadow: "none", // Optional: Remove shadow for a clean look
      }}
    >
      <Toolbar>
        <Typography variant="h6">Dashboard Header</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
