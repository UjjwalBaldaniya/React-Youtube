import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

const Home: React.FC = () => {
  return (
    <>
      <Box>
        <Grid container>
          <Grid item xs={12} sm={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="200"
                image="https://i.ytimg.com/vi/p0EsltiWhUQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBGEQf8crydRrRAVDPGAFGGWAdu3g"
                alt="Paella dish"
              />
              <CardContent sx={{ backgroundColor: "background.default" }}>
                <Stack direction="row" spacing={2}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    This impressive paella is a perfect party dish and a fun
                    meal to cook together with your guests. Add 1 cup of frozen
                    peas along with the mussels, if you like.
                  </Typography>
                  <MoreVertIcon />
                </Stack>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="200"
                image="https://i.ytimg.com/vi/p0EsltiWhUQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBGEQf8crydRrRAVDPGAFGGWAdu3g"
                alt="Paella dish"
              />
              <CardContent sx={{ backgroundColor: "background.default" }}>
                <Stack direction="row" spacing={2}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    This impressive paella is a perfect party dish and a fun
                    meal to cook together with your guests. Add 1 cup of frozen
                    peas along with the mussels, if you like.
                  </Typography>
                  <MoreVertIcon />
                </Stack>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="200"
                image="https://i.ytimg.com/vi/p0EsltiWhUQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBGEQf8crydRrRAVDPGAFGGWAdu3g"
                alt="Paella dish"
              />
              <CardContent sx={{ backgroundColor: "background.default" }}>
                <Stack direction="row" spacing={2}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    This impressive paella is a perfect party dish and a fun
                    meal to cook together with your guests. Add 1 cup of frozen
                    peas along with the mussels, if you like.
                  </Typography>
                  <MoreVertIcon />
                </Stack>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="200"
                image="https://i.ytimg.com/vi/p0EsltiWhUQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBGEQf8crydRrRAVDPGAFGGWAdu3g"
                alt="Paella dish"
              />
              <CardContent sx={{ backgroundColor: "background.default" }}>
                <Stack direction="row" spacing={2}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    This impressive paella is a perfect party dish and a fun
                    meal to cook together with your guests. Add 1 cup of frozen
                    peas along with the mussels, if you like.
                  </Typography>
                  <MoreVertIcon />
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Home;
