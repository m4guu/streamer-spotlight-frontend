import { TypographyOptions } from "@mui/material/styles/createTypography";

function pxToRem(value: number) {
  return `${value / 10}rem`;
}

function responsiveFontSizes({
  sm,
  md,
  lg,
}: {
  sm: number;
  md: number;
  lg: number;
}) {
  return {
    "@media (min-width:320px)": {
      fontSize: pxToRem(sm),
    },
    "@media (min-width:480px)": {
      fontSize: pxToRem(sm),
    },
    "@media (min-width:600px)": {
      fontSize: pxToRem(sm),
    },
    "@media (min-width:900px)": {
      fontSize: pxToRem(md),
    },
    "@media (min-width:1200px)": {
      fontSize: pxToRem(lg),
    },
  };
}

const FONT_PRIMARY = "Silkscreen";

export const typography: TypographyOptions = {
  fontFamily: FONT_PRIMARY,
  fontWeightRegular: 400,
  fontWeightMedium: 600,
  fontWeightBold: 700,

  subtitle1: {
    lineHeight: "117%",
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: 0,
    fontSize: pxToRem(20),
    ...responsiveFontSizes({ sm: 12, md: 18, lg: 20 }),
  },
};
