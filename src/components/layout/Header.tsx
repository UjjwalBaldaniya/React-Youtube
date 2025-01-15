import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import YouTubeIcon from "@mui/icons-material/YouTube";
import {
  AppBar,
  Avatar,
  Button,
  InputAdornment,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";

import { collapsedWidth } from "../../constants";

const Header: React.FC = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: `calc(100% - ${collapsedWidth}px)`, // Adjust width based on drawer state
        ml: `${collapsedWidth}px`, // Margin left to align with drawer
        backgroundColor: "background.default",
        boxShadow: "none",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <YouTubeIcon
            sx={{
              fontSize: 35,
              color: "primary.main",
              mr: 1,
            }}
          />
          <Typography variant="h6" sx={{ color: "white" }}>
            YouTube
          </Typography>
        </div>

        <TextField
          variant="outlined"
          placeholder="Search"
          size="small"
          sx={{
            backgroundColor: "background.default",
            borderRadius: 5,
            width: "40%",
            overflow: "hidden",
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "background.paper",
                borderRadius: 5,
              },
              "&:hover fieldset": {
                borderColor: "background.paper",
                borderRadius: 5,
              },
              "&.Mui-focused fieldset": {
                borderColor: "background.paper",
                borderRadius: 5,
              },
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon style={{ color: "white" }} />
              </InputAdornment>
            ),
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Button
            variant="outlined"
            color="inherit"
            startIcon={<AddIcon />}
            sx={{
              color: "white",
              borderColor: "background.default",
              borderRadius: "50px",
              backgroundColor: "background.paper",
              textTransform: "none",
            }}
          >
            Create
          </Button>

          <Avatar
            alt="Cindy Baker"
            src="/static/images/avatar/3.jpg"
            sx={{
              width: 35,
              height: 35,
            }}
          />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
