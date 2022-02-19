import "@emotion/react";
import { Theme as CustomTheme } from "./themeTypes";

declare module "@emotion/react" {
  export interface Theme extends CustomTheme {}
}
