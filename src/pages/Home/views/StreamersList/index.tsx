import React from "react";

import { List } from "@mui/material";
import { styled } from "@mui/system";

import { StreamerItem } from "../../../../components";

import { Streamer } from "../../../../shared/interfaces";

type StreamersListProps = {
  streamers: Streamer[];
};

export const StreamersList: React.FC<StreamersListProps> = ({ streamers }) => {
  return (
    <StreamerList>
      {streamers.map((streamer, i) => {
        return (
          <StreamerItem key={streamer.id} streamer={streamer} itemIndex={i} />
        );
      })}
    </StreamerList>
  );
};

const StreamerList = styled(List)(({ theme }) => ({
  width: "100%",
  maxWidth: "50rem",
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1),
}));
