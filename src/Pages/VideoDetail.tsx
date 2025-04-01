import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ScreenShareIcon from "@mui/icons-material/ScreenShare";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import { Avatar, Box, Grid, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

import {
  getChannelSubscribers,
  subscribeToChannel,
} from "../api/services/subscribeService";
import { getVideoById, getVideos } from "../api/services/videoService";
import CustomButton from "../components/CustomButton";
import { IGetVideo } from "../types/createVideo.types";
import { timeAgo } from "../utils/dateFunc";

const buttonIconTextStyles = {
  height: "36xpx",
  color: "white",
  borderColor: "background.default",
  borderRadius: "50px",
  backgroundColor: "background.paper",
  textTransform: "none",
};

const VideoDetail: React.FC = () => {
  const { id } = useParams();

  const [video, setVideo] = useState<IGetVideo>();
  const [videosData, setVideosData] = useState<IGetVideo[]>([]);
  const [isSubscribed, setIsSubscribed] = useState<boolean>();

  const userId = localStorage.getItem("user_id");

  const { videoFile, title, ownerDetails } = video || {};

  const fetchVideoById = async (id: string): Promise<void | null> => {
    try {
      const response = await getVideoById(id);

      if (response?.success && response?.data) {
        setVideo(response.data);
      }
    } catch (error) {
      return null;
    }
  };

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

  const handleSubscribe = async (): Promise<void> => {
    try {
      if (!video?.ownerDetails._id) {
        toast.error("ID is undefined. Cannot proceed.");
        return;
      }
      const response = await subscribeToChannel(video?.ownerDetails._id);
      if (response) setIsSubscribed(!!response?.data);
    } catch (error) {
      toast.error("ID is undefined. Cannot proceed.");
    }
  };

  const getUserChannelSubscribers = async (
    id: string
  ): Promise<void | null> => {
    try {
      const response = await getChannelSubscribers(id);
      if (response) {
        const hasSubscribed = response?.data.some(
          (value) => value.subscriberId === userId
        );

        setIsSubscribed(hasSubscribed);
      }
    } catch (error) {
      return null;
    }
  };

  useEffect(() => {
    fetchVideoById(id || "");
    fetchVideosData();
  }, [id]);

  useEffect(() => {
    const channelId = video?.ownerDetails._id;
    if (channelId) getUserChannelSubscribers(channelId);
  }, [video]);

  if (!video) return <p>Loading...</p>;

  return (
    <Box mt={5}>
      <Grid container spacing={2}>
        <Grid item xs={7}>
          <Stack spacing={1}>
            <video width="100%" controls>
              <source src={videoFile} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <Typography variant="h3" sx={{ fontWeight: 700 }}>
              {title}
            </Typography>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Stack direction="row" alignItems="center" spacing={2}>
                <Avatar
                  alt={ownerDetails?.username}
                  src={ownerDetails?.avatar}
                  sx={{ width: 36, height: 36 }}
                />
                <Stack>
                  <Stack direction="row" alignItems="center" spacing={0.5}>
                    <Typography variant="h4">
                      {ownerDetails?.username}
                    </Typography>
                    <CheckCircleIcon sx={{ width: "14px", height: "14px" }} />
                  </Stack>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {`1.54M subscribers`}
                  </Typography>
                </Stack>
                <CustomButton
                  type="button"
                  variant="outlined"
                  sx={{
                    color: "background.default",
                    borderColor: "white",
                    borderRadius: "50px",
                    backgroundColor: "white",
                    textTransform: "none",
                  }}
                  onClick={handleSubscribe}
                >
                  {isSubscribed ? "Subscribed" : "Subscribe"}
                </CustomButton>
              </Stack>

              <Stack direction="row" alignItems="center" spacing={1}>
                <CustomButton
                  type="button"
                  variant="outlined"
                  startIcon={<ThumbUpOffAltIcon />}
                  sx={buttonIconTextStyles}
                >
                  112K
                </CustomButton>
                <CustomButton
                  type="button"
                  variant="outlined"
                  startIcon={<ScreenShareIcon />}
                  sx={buttonIconTextStyles}
                >
                  Share
                </CustomButton>
              </Stack>
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={5}>
          {videosData.map((video, index) => {
            const { thumbnail, title, ownerDetails, views, createdAt } = video;
            return (
              <Stack
                direction="row"
                mb={2}
                alignItems="start"
                spacing={2}
                key={index}
              >
                <Box
                  component="img"
                  src={thumbnail}
                  alt={title}
                  sx={{
                    height: "94px",
                    width: "168px",
                    objectFit: "contain",
                    display: "block",
                  }}
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
                  <Stack direction="row" alignItems="center" spacing={0.5}>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "text.secondary",
                      }}
                    >
                      {ownerDetails?.username}
                    </Typography>
                    <CheckCircleIcon sx={{ width: "14px", height: "14px" }} />
                  </Stack>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {`${views} views ~ ${timeAgo(createdAt)}`}
                  </Typography>
                </Stack>
                <MoreVertIcon />
              </Stack>
            );
          })}
        </Grid>
      </Grid>
    </Box>
  );
};

export default VideoDetail;
