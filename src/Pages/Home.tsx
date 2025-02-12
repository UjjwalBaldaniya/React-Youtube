import CheckCircleIcon from "@mui/icons-material/CheckCircle";
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
import React, { useEffect, useState } from "react";

import { getVideos } from "../api/services/videoService";
import { IGetVideo } from "../types/createVideo.types";
import { timeAgo } from "../utils/dateFunc";

const Home: React.FC = () => {
  const [videosData, setVideosData] = useState<IGetVideo[]>([]);

  const fetchVideosData = async (): Promise<void> => {
    try {
      const response = await getVideos();

      if (response?.success && response?.data?.videos) {
        setVideosData(response.data.videos);
      }
    } catch (error) {
      setVideosData([]);
    }
  };

  useEffect(() => {
    fetchVideosData();
  }, []);

  return (
    <>
      <Box>
        <Grid container spacing={2}>
          {videosData.map((video, index) => {
            const { thumbnail, title, ownerDetails, views, createdAt } =
              video || {};
            return (
              <Grid item xs={12} sm={6} lg={4} key={index}>
                <Card>
                  <CardMedia
                    component="img"
                    height="200"
                    image={thumbnail}
                    alt={title}
                  />
                  <CardContent sx={{ backgroundColor: "background.default" }}>
                    <Stack direction="row" alignItems="start" spacing={2}>
                      <Avatar
                        alt={ownerDetails.username}
                        src={ownerDetails.avatar}
                        sx={{ width: 36, height: 36 }}
                      />
                      <Stack direction="column" sx={{ flex: 1 }}>
                        <Typography
                          variant="h4"
                          sx={{
                            color: "text.primary",
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                          }}
                        >
                          {title}
                        </Typography>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: "5px",
                          }}
                        >
                          <Typography
                            variant="body2"
                            sx={{
                              color: "text.secondary",
                            }}
                          >
                            {ownerDetails.username}
                          </Typography>
                          <CheckCircleIcon
                            sx={{ width: "14px", height: "14px" }}
                          />
                        </Box>
                        <Typography
                          variant="body2"
                          sx={{ color: "text.secondary" }}
                        >
                          {`${views} views ~ ${timeAgo(createdAt)}`}
                        </Typography>
                      </Stack>
                      <MoreVertIcon />
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
};

export default Home;
