import React from "react";

import { Box, Avatar, Typography } from "@mui/material";
import { styled } from "@mui/system";

// ! static profile image
import staticProfileImage from "../../../../assets/static/images/dummy-profile-image.png";

import { DUMMY_STREAMER } from "./constans";
import { StreamerFieldInfo } from "../../../../components";
import { Dislike, Like } from "./views/Streamer.actions";

type StreamerProps = {
  streamerId: string;
};
export const Streamer: React.FC<StreamerProps> = ({ streamerId }) => {
  // todo: add functionality when services will be added -> get streamer by Id

  return (
    <StreamerContainer>
      <StreamerAvatar src={staticProfileImage} />

      <Box>
        <StreamerFieldInfo title="name" value={DUMMY_STREAMER.name} />
        <StreamerFieldInfo title="platform" value={DUMMY_STREAMER.platform} />
        <StreamerFieldInfo
          title="likes"
          value={DUMMY_STREAMER.score.likes.length}
        />
        <StreamerFieldInfo
          title="dislikes"
          value={DUMMY_STREAMER.score.dislikes.length}
        />
      </Box>

      <StreamerActions>
        <Like />
        <Dislike />
      </StreamerActions>
    </StreamerContainer>
  );
};

const StreamerContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const StreamerAvatar = styled(Avatar)({
  width: "10rem",
  height: "10rem",
});

const StreamerActions = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "100%",
  gap: theme.spacing(1),
  marginTop: theme.spacing(2),
}));
