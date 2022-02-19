import { Theme } from "../../types/themeTypes";
import defaultTheme from "./defaultTheme";

const lightTheme: Theme = {
  ...defaultTheme,
  palette: {
    background: "#f2f2f2",
    primary: {
      dark: "hsl(238, 40%, 52%)", //moderate_blue
      light: "hsl(239, 57%, 85%)", // light_graying_blue
    },
    secondary: {
      dark: "hsl(212, 24%, 26%)", // dark_blue
      light: "hsl(211, 10%, 45%)", // grayish_blue
    },
    danger: {
      dark: "hsl(358, 79%, 66%)", // soft_red
      light: "hsl(357, 100%, 86%)", // pale_red
    },
    gray: {
      dark: "hsl(223, 19%, 93%)", // light_gray
      light: "hsl(228, 33%, 97%)", // very_light_gray
    },
    common: {
      white: "hsl(0, 0%, 100%)",
      black: "hsl(0, 0%, 0%)",
    },
  },
};
export default lightTheme;
