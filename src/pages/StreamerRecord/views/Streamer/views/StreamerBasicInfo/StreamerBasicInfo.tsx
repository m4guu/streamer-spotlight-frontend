import React from "react";

import { Box } from "@mui/material";

import { StreamerFieldInfo } from "../../../../../../components";
import { Streamer } from "../../../../../../shared/interfaces";

type StreamerBasicInfoProps = {
  streamer: Streamer;
};
export const StreamerBasicInfo: React.FC<StreamerBasicInfoProps> = ({
  streamer,
}) => {
  return (
    <Box>
      <StreamerFieldInfo title="name" value={streamer.name} />
      <StreamerFieldInfo title="platform" value={streamer.platform} />
      <StreamerFieldInfo title="description" value={streamer.description} />
      <StreamerFieldInfo title="likes" value={streamer.score.likes.length} />
      <StreamerFieldInfo
        title="dislikes"
        value={streamer.score.dislikes.length}
      />
    </Box>
  );
};
