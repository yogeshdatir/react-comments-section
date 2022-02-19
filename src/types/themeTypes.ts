export interface DefaultTheme {
  typography: Typography;
  breakpoints: Breakpoints;
}

export interface Typography {
  fontFamily: string;
  headingLg: HeadingLg;
  headingMd: HeadingMd;
  body: Body;
  fontWeightLight: number;
  fontWeightMedium: number;
  fontWeightBold: number;
}

export interface HeadingLg {
  fontSize: number;
  lineHeight: string;
}

export interface HeadingMd {
  fontSize: number;
  lineHeight: string;
}

export interface Body {
  fontSize: number;
  lineHeight: number;
}

export interface Breakpoints {
  mobile: number;
  desktop: number;
}

export interface Theme extends DefaultTheme {
  palette: Palette;
}

export interface Palette {
  background: string;
  primary: Primary;
  secondary: Secondary;
  danger: Danger;
  gray: Gray;
  common: Common;
}

export interface Primary {
  dark: string;
  light: string;
}

export interface Secondary {
  dark: string;
  light: string;
}

export interface Danger {
  dark: string;
  light: string;
}

export interface Gray {
  dark: string;
  light: string;
}

export interface Common {
  white: string;
  black: string;
}
