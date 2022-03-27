export interface DefaultTheme {
  typography: Typography;
  breakpoints: Breakpoints;
}

export interface Typography {
  fontFamily: string;
  headingLg: HeadingLg;
  headingMd: HeadingMd;
  body: Body;
  fontWeightLight: string;
  fontWeightMedium: string;
  fontWeightBold: string;
}

export interface HeadingLg {
  fontSize: string;
  lineHeight: string;
}

export interface HeadingMd {
  fontSize: string;
  lineHeight: string;
}

export interface Body {
  fontSize: string;
  lineHeight: string;
}

export interface Breakpoints {
  mobile: string;
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
