import React from "react";
import { useParams } from "react-router-dom";

import { Typography } from "@mui/material";
import { styled } from "@mui/system";

import { Streamer } from "./views/Streamer/Streamer";

const StreamerRecord: React.FC = () => {
  const { streamerId } = useParams();

  return (
    <StreamerRecordContainer>
      <Typography variant="subtitle1">streamer record</Typography>
      {streamerId && <Streamer streamerId={streamerId} />}
    </StreamerRecordContainer>
  );
};

const StreamerRecordContainer = styled("section")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: theme.spacing(3),
  padding: theme.spacing(2),
}));

export default StreamerRecord;
