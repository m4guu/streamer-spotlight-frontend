import React from "react";

import { Box, Typography, CircularProgress } from "@mui/material";
import { styled } from "@mui/system";

import { Status } from "../../shared/enums";

type StatusBarProps = {
  status: "error" | "loading" | "success";
  error: any;
  noItems: boolean;
};
export const StatusBar: React.FC<StatusBarProps> = ({
  status,
  error,
  noItems,
}) => {
  return (
    <Container>
      {status === Status.LOADING && <CircularProgress />}
      {status === Status.ERROR && (
        <Typography color="error">
          {error.message || "Error occured. Please try later."}
        </Typography>
      )}
      {noItems && <Typography color="info">no streamers added yet.</Typography>}
    </Container>
  );
};

const Container = styled(Box)({});
