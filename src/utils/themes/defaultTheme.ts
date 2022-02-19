import { DefaultTheme } from "./../../types/themeTypes";
const defaultTheme: DefaultTheme = {
  typography: {
    fontFamily: "Rubik, sans-serif",
    headingLg: {
      fontSize: 24,
      lineHeight: "normal",
    },
    headingMd: {
      fontSize: 18,
      lineHeight: "normal",
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
    },
    fontWeightLight: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
  breakpoints: {
    mobile: 375,
    desktop: 1440,
  },
};
export default defaultTheme;
