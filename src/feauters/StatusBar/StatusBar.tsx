import React from "react";

import { Box, Typography, CircularProgress } from "@mui/material";

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
    <Box>
      {status === Status.LOADING && <CircularProgress />}
      {status === Status.ERROR && (
        <Typography color="error">
          {error.message || "Error occured. Please try later."}
        </Typography>
      )}
      {noItems && <Typography color="info">No fields added yet.</Typography>}
    </Box>
  );
};
