import React from "react";
import { Link } from "react-router-dom";

import { ListItem, Typography, Box } from "@mui/material";
import { styled } from "@mui/system";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

import { Streamer } from "../../shared/interfaces";
import { PATHS } from "../../Routes/paths";

type StreamerItemProps = {
  streamer: Streamer;
  itemIndex: number;
};
const StreamerItem: React.FC<StreamerItemProps> = ({ streamer, itemIndex }) => {
  return (
    <ListItem disablePadding>
      <ListItemLink to={`${PATHS.STREAMER}/${streamer.id}`}>
        <Name>
          {/* add cup emoij for most liked streamer  */}
          {itemIndex === 0 && <EmojiEventsIcon color="warning" />}
          {streamer.name}
        </Name>
        <ScoreBox>
          <Typography color="success.main">
            {streamer.score.likes.length}
          </Typography>
          <Typography color="error.main">
            {streamer.score.dislikes.length}
          </Typography>
        </ScoreBox>
      </ListItemLink>
    </ListItem>
  );
};

const ListItemLink = styled(Link)(({ theme }) => ({
  padding: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,
  background: theme.palette.background.layout,
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  textDecoration: "none",
  color: "inherit",
  ":hover": {
    color: theme.palette.primary.main,
  },
}));

const Name = styled(Typography)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
}));

const ScoreBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(1),
}));

export default StreamerItem;
