import { DefaultTheme } from "./../../types/themeTypes";
const defaultTheme: DefaultTheme = {
  typography: {
    fontFamily: "Rubik, sans-serif",
    headingLg: {
      fontSize: "24px",
      lineHeight: "normal",
    },
    headingMd: {
      fontSize: "18px",
      lineHeight: "normal",
    },
    body: {
      fontSize: "16px",
      lineHeight: "24px",
    },
    fontWeightLight: "400px",
    fontWeightMedium: "500px",
    fontWeightBold: "700px",
  },
  breakpoints: {
    mobile: "576px",
  },
};
export default defaultTheme;
