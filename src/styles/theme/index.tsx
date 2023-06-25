import React from "react";
import {
  createTheme,
  CssBaseline,
  StyledEngineProvider,
  ThemeOptions,
  ThemeProvider,
} from "@mui/material";

import { palette } from "./palette";
import { typography } from "./typography";

export const ThemeConfig: React.FCWithChildren = ({ children }) => {
  const themeOptions: ThemeOptions = { palette, typography };
  const theme = createTheme(themeOptions);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
};
