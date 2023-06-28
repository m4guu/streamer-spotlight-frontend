import React from "react";

import { Box, Typography, CircularProgress } from "@mui/material";

import { Status } from "../../shared/enums";
import { CustomError } from "../../shared/interfaces";

type StatusBarProps = {
  error: CustomError | null;
  status?: "error" | "loading" | "success" | "idle";
  noItems?: boolean;
};
export const StatusBar: React.FC<StatusBarProps> = ({
  status,
  error,
  noItems,
}) => {
  return (
    <Box>
      {status === Status.LOADING && <CircularProgress />}
      {error && <Typography color="error">{error.message}</Typography>}
      {noItems && <Typography color="info">No fields added yet.</Typography>}
    </Box>
  );
};
