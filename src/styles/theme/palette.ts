const THEME_BACKGROUND = {
  light: "#f7f7f7",
  dark: "#1A1C1E",
  layoutLight: "#ffffff",
  layoutDark: "#2F3338",
};

const COMMON = {
  common: { black: "#000", white: "#fff" },
};

export const palette = {
  ...COMMON,
  primary: { main: "#6441a5" },
  info: { main: "#477998" },
  error: { main: "#95190C" },
  success: { main: "#9AE19D" },
  background: {
    default: THEME_BACKGROUND.dark,
    layout: THEME_BACKGROUND.layoutDark,
  },
  others: {
    border_color: "rgba(255, 255, 255, 0.12)",
    activeNavItem: "#3F444E",
  },
  action: { hover: "#ffffff33" },
};
