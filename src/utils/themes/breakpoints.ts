// Screen sizes used in your app
const sizes = {
  mobile: "576px",
  desktop: "577px",
};

// Breakpoints based on your configuration
export const CustomBreakpoints = {
  mobile: `@media (max-width: ${sizes.mobile})`,
  desktop: `@media (min-width: ${sizes.desktop})`,
};
