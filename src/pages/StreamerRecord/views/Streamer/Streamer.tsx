import React from "react";

import { Box, Avatar } from "@mui/material";
import { styled } from "@mui/system";

import { useStreamer } from "../../../../hooks/query-hooks/streamer/useStreamer";

import { StatusBar } from "../../../../feauters/StatusBar/StatusBar";
import { Dislike, Like } from "./views/Streamer.actions";
import { StreamerBasicInfo } from "./views/StreamerBasicInfo/StreamerBasicInfo";

// ! static profile image
import staticProfileImage from "../../../../assets/static/images/dummy-profile-image.png";

type StreamerProps = {
  streamerId: string;
};
export const Streamer: React.FC<StreamerProps> = ({ streamerId }) => {
  const { status, error, data: streamer } = useStreamer(streamerId);

  return (
    <StreamerContainer>
      {streamer && (
        <>
          <StreamerAvatar src={staticProfileImage} />
          <StreamerBasicInfo streamer={streamer} />
          <StreamerActions>
            <Like streamerId={streamer.id} />
            <Dislike streamerId={streamer.id} />
          </StreamerActions>
        </>
      )}
      <StatusBar status={status} error={error} />
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
