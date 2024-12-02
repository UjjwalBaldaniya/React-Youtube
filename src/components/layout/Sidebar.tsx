import {
  Home as HomeIcon,
  Menu as MenuIcon,
  Subscriptions as SubscriptionsIcon,
  VideoLibrary as VideoLibraryIcon,
} from "@mui/icons-material";
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

import { collapsedWidth, drawerWidth } from "../../constants";

const Sidebar = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (): void => setIsOpen((prev) => !prev);

  return (
    <Drawer
      variant="permanent"
      open={isOpen}
      sx={{
        width: isOpen ? drawerWidth : collapsedWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: isOpen ? drawerWidth : collapsedWidth,
          transition: "width 0.3s",
          overflowX: "hidden",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: isOpen ? "flex-start" : "center",
          padding: "8px",
        }}
      >
        <IconButton onClick={toggleDrawer}>
          <MenuIcon />
        </IconButton>
      </Box>

      {/* Drawer List */}
      <List>
        <ListItem component={Link} to={"/"}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          {isOpen && <ListItemText primary="Home" />}
        </ListItem>
        <ListItem component={Link} to={"/"}>
          <ListItemIcon>
            <VideoLibraryIcon />
          </ListItemIcon>
          {isOpen && <ListItemText primary="Library" />}
        </ListItem>
        <ListItem component={Link} to={"/"}>
          <ListItemIcon>
            <SubscriptionsIcon />
          </ListItemIcon>
          {isOpen && <ListItemText primary="Subscriptions" />}
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
