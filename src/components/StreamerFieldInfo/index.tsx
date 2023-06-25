import React from "react";

import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

type StreamerFieldInfoProps = {
  title: string;
  value: string | number;
};
const StreamerFieldInfo: React.FC<StreamerFieldInfoProps> = ({
  title,
  value,
}) => {
  return (
    <Container>
      <Typography color="primary">{title}</Typography>
      <Typography>{value}</Typography>
    </Container>
  );
};

const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  gap: theme.spacing(10),
}));

export default StreamerFieldInfo;
