import React from "react";

import { List } from "@mui/material";
import { styled } from "@mui/system";

import { StreamerItem } from "../../../../components";

import { Streamer } from "../../../../shared/interfaces";
import { sortStreamersByLikes } from "../../../../utils";

type StreamersListProps = {
  streamers: Streamer[];
};

export const StreamersList: React.FC<StreamersListProps> = ({ streamers }) => {
  const sortedStreamers = sortStreamersByLikes(streamers);

  return (
    <StreamerList>
      {sortedStreamers.map((streamer, i) => {
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
